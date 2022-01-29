import 'dotenv/config'
import express from 'express'
import { adaptRouter } from './adapters/express-router-adapter'
import { appConfig } from './config/app'
import { makeSearchGithubController } from './factory/search-github-controller'
const app = express()

app.get('/:name', adaptRouter(makeSearchGithubController()))

app.listen(appConfig.PORT, () => {
  console.log(`server running at: http://localhost:${appConfig.PORT}  🚀`)
})
