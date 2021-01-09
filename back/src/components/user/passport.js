import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import User from './userModel.js'

export default passport

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser(async (user, done) => done(null, user))

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  const existingUser = await User.findOne({ username }).exec()
  if (!existingUser) return done(null, false, { message: 'Invalid email or password' })

  const match = await bcrypt.compare(password, existingUser.password)
  return match
    ? done(null, existingUser)
    : done(null, false, { message: 'Invalid email or password' })
}))

passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const existingUser = await User.findOne({ username }).exec()
  if (existingUser) return done(null, false, { message: 'User already exists' })

  const hash = await bcrypt.hash(password, 10)
  const newUser = new User({ username, password: hash })
  await newUser.save()
  return done(null, newUser)
}))
