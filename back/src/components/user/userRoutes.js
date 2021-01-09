import express from 'express'
import passport from './passport.js'
// import userController from './userController.js'

const router = express.Router()

export default function () {
  router.post('/sign-up', passport.authenticate('local-signup'), (_req, res) => res.sendStatus(200))
  router.post('/login', passport.authenticate('local-login'), (_req, res) => res.sendStatus(200))
  return router
}
