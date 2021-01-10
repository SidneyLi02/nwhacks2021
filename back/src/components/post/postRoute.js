import express from 'express'
import multer from '../../middleware/multer.js'
import postController from './postController.js'
import config from '../../../config.js'

const router = express.Router()

export default function () {
  router.post('/new', multer.array('images', config.BATCH_IMAGE_UPLOAD_COUNT), postController.newPost)
  router.get('/get', postController.getPosts)
  return router
}
