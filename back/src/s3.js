import AWS from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config()

AWS.config.update({
  region: 'us-west-2',
  apiVersion: '2006-03-01',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export default new AWS.S3()
