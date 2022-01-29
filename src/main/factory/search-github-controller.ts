import { SearchGithubUser } from '../../data/use-case/search-github-user'
import { GetGithubUser } from '../../infra/api/get-github-user'
import { SearchGithubUserController } from '../../presentaton/controllers/search-github-user'

export const makeSearchGithubController = (): SearchGithubUserController => {
  const apiSearchGithubUser = new GetGithubUser()
  const searchGithubUser = new SearchGithubUser(apiSearchGithubUser)
  return new SearchGithubUserController(searchGithubUser)
}
