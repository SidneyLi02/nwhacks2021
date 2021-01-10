import mongoose from 'mongoose'

const Schema = mongoose.Schema
const PostSchema = new Schema({
  date: { type: Date, default: Date.now },
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  question: { type: String },
  answer: { type: String },
  images: [{ type: String }],
  currentMood: { type: String },
  negativeMoods: [{ type: String }]
})

export default mongoose.model('Post', PostSchema)
