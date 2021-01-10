import express from 'express'
import helmet from 'helmet'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import dotenv from 'dotenv'

import config from '../config.js'
import authCheck from './middleware/authCheck.js'
import userRoute from './components/user/userRoute.js'
import postRoute from './components/post/postRoute.js'

dotenv.config()

const { json, urlencoded } = express
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  maxAge: config.SESSION_DURATION,
  keys: [process.env.COOKIE_SESSION_SECRET_1, process.env.COOKIE_SESSION_SECRET_2],
  SameSite: 'none',
  httpOnly: true,
  secure: false
}))
app.use(helmet())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')))

export default function (db) {
  app.use('/auth', userRoute())
  app.use('/post', authCheck, postRoute())

  app.use('*', (_req, res) => res.sendStatus(404))
  return app
}
