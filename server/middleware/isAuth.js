const passport = require('passport')

module.exports = (req, res, next) => {
  // Check for JWT and verify it
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err)

    // If token found add user to req otherwise req.user is false
    req.login(user, { session: false }, next)
  })(req, res, next)
}