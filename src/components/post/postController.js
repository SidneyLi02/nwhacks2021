import Post from './postModel.js'
import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId

export default {
  newPost,
  getPosts
}

async function newPost (req, res) {
  const type = req.headers['content-type']
  const { question, answer, currentMood, negativeMoods } = req.body
  const post = new Post({
    userID: req.user._id,
    question,
    answer,
    currentMood
  })
  post.negativeMoods = typeof negativeMoods === 'string'
    ? [negativeMoods]
    : negativeMoods

  if (type.includes('application/x-www-form-urlencoded') || type.includes('application/json')) {
    const s = await post.save()
    s ? res.sendStatus(200) : res.sendStatus(500)
  } else if (type.includes('multipart/form-data')) {
    if (!req.files.length) return res.sendStatus(400)
    const images = req.files.map(file => file.key)
    post.images = images
    const s = await post.save()
    s ? res.sendStatus(200) : res.sendStatus(500)
  }
}


async function getPosts (req, res) {
  const queryDate = new Date(req.body.date) ?? new Date()

  const startMonth = new Date(queryDate.getFullYear(), queryDate.getMonth(), 1, 0, 0, 0, 0)
  const endMonth = new Date(queryDate.getFullYear(), queryDate.getMonth() + 1, 1, 0, 0, 0)
  const capDate = endMonth < new Date() ? new Date() : endMonth

  const query = Post.find({ userID: new ObjectId(req.user._id), date: { $gte: startMonth, $lte: capDate } }).sort({ date: -1 })
  const posts = await query.exec()
  res.json(posts)
}