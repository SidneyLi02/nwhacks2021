import Post from './postModel.js'

export default {
  newPost
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
