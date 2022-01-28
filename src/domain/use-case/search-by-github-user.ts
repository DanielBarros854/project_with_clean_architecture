import { IGithubUser } from '../models/github-user'

type Input = {
  name: string
}

export type ISearchByGithubUser = {
  search: (data: Input) => Promise<IGithubUser>
}
