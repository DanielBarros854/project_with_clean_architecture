import 'dotenv/config'
import express from 'express'
import { appConfig } from './config/app'
const app = express()

app.listen(appConfig.PORT, () => {
  console.log(`server running at: http://localhost:${appConfig.PORT}  🚀`)
})
