require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Vueet = require('../models/vueet');

const { PubSub } = require('graphql-subscriptions')

const pubsub = new PubSub()

exports.vueets = async (args, req) => {
  // Check if user is logged in
  if (!req.user) throw new Error('Not authorized')

  const userId = req.user._id

  try {
    const { following } = await User.findById(userId)

    return await Vueet.find({ author: { $in: following } }).populate('author').sort({ createdAt: -1 })
  } catch (error) {
    throw new Error('Failed to fetch vueets')
  }
}

exports.follow = async ({ input }, req) => {
  // Check if user is logged in
  if (!req.user) throw new Error('Not authorized')

  const { userId } = input
  const currentUserId = req.user._id

  try {
    // Find user to follow
    const user = await User.findById(userId)

    // Find current logged in user
    const currentUser = await User.findById(currentUserId)
    
    // Update current logged in user following list
    currentUser.following.push(user._id)
    await currentUser.save()

    // Return graphql User object
    return {
      ...user._doc
    }
  } catch (error) {
    throw new Error('Failed to follow user')
  }
}

exports.login = async ({ input }) => {
  const { email, password } = input
  
  try {
    // Find user by email
    const user = await User.findOne({ email })
    
    // Check if user with email exists
    if (!user) throw new Error('No user found with email')
    
    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password)
    
    if (!validPassword) throw new Error('Invalid password')
    
    // Convert user object to json
    let userJSON = user.toJSON()
    
    // Remove sensitive information from user object to be stored in JWT
    userJSON = {
      _id: userJSON._id,
      name: userJSON.name,
      email: userJSON.email
    }
    
    // Create json web token
    const token = jwt.sign(userJSON, process.env.JWT_SECRET, { expiresIn: '1d' })
    
    return {
      token,
      user
    }
  } catch (error) {
    throw new Error('Failed to login user')
  }
}

exports.createUser = async ({ input }) => {
  const { name, email, password } = input

  try {
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    return {
      ...user._doc
    }
  } catch (error) {
    throw new Error('Failed to create new user')
  }
}

exports.createVueet = async ({ input }, req) => {
  // Check if user is logged in
  if (!req.user) throw new Error('Not authorized')

  // Get content of vueet
  const { content } = input
  const userId = req.user._id

  try {
    // Find current logged in user in DB
    const author = await User.findById(userId)

    // Create vueet
    const vueet = await Vueet.create({
      content,
      author
    })

    // Update authors vueets
    author.vueets.push(vueet)
    await author.save()

    pubsub.publish(SOMETHING_CHANGED_TOPIC, vueet._doc)

    // Return graphql Vueet object
    return {
      ...vueet._doc
    }
  } catch (error) {
    throw new Error('Failed to create vueet')
  }
}

const SOMETHING_CHANGED_TOPIC = 'something_changed'
exports.somethingChanged = {
  subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
}

exports.hello = () => {
  return 'Hello world!'
}
