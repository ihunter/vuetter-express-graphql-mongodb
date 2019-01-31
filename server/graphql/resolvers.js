require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.users = async (args, req) => {
  if (!req.user) throw new Error('Not authorized')
  
  try {
    return await User.find()
  } catch (error) {
    throw new Error('Failed to fetch users')
  }
}

exports.createUser = async ({ input }) => {
  const { name, email, password } = input

  try {
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({
      name,
      email,
      password: hashedPassword
    })

    const newUser = await user.save()

    return {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    }
  } catch (error) {
    throw new Error('Failed to create new user')
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

    userJSON = {
      _id: userJSON._id,
      name: userJSON.name,
      email: userJSON.email
    }

    // Create json web token
    const token = jwt.sign(userJSON, process.env.JWT_SECRET, { expiresIn: '1d' })

    return {
      token,
      user: userJSON
    }
  } catch (error) {
    throw new Error('Failed to login user')
  }
}