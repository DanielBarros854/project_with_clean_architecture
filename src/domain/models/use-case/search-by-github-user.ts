import { IGithubUser } from '../github-user'

type Input = {
  name: string
}

export type ISearchByGithubUser = {
  search: (data: Input) => Promise<IGithubUser>
}
