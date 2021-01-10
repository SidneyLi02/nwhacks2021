import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw new Error(err.message)
  console.log('Connected to Mongo')
})

export default mongoose.connection
