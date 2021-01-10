import config from './config.js'
import app from './src/app.js'
import * as db from './src/mongo.js'

app(db).listen(process.env.PORT ?? 80, () => {
  config.PORT
    ? console.log(`Live @ http://localhost:${config.PORT}`)
    : console.log('Live @ http://localhost:8080')
})
