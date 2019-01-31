require('dotenv').config()
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('./models/user')

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(new JwtStrategy(options, async function (jwtPayload, done) {
  try {
    // Find user by id
    const user = await User.findById(jwtPayload._id)

    // If no user found throw error
    if (!user) return done(null, new Error('No user found with ID'))

    return done(null, user)
  } catch (error) {
    done(error, false)
  }
}))