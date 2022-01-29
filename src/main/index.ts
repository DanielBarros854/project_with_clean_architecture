import 'dotenv/config'
import { adaptRouter } from './adapters/express-router-adapter'
import { appConfig, app } from './config/app'
import { makeSearchGithubController } from './factory/search-github-controller'

app.get('/:name', adaptRouter(makeSearchGithubController()))

app.listen(appConfig.PORT, () => {
  console.log(`server running at: http://localhost:${appConfig.PORT}  🚀`)
})
