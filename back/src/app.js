import express from 'express'
import helmet from 'helmet'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import dotenv from 'dotenv'

dotenv.config()

const { json, urlencoded } = express
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  maxAge: 43_200_000, // 12h
  keys: [process.env.COOKIE_SESSION_SECRET_1, process.env.COOKIE_SESSION_SECRET_2],
  domain: '',
  SameSite: 'none',
  httpOnly: true,
  secure: false
}))
app.use(helmet())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))

export default function (db) {
  console.log(db)

  app.use('*', (_req, res) => res.sendStatus(404))
  return app
}
