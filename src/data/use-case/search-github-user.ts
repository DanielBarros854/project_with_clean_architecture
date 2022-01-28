import { IGithubUser } from '../../domain/models/github-user'
import { ISearchByGithubUser } from '../../domain/use-case/search-by-github-user'
import { IApiSearchGithubUser } from '../../presentaton/contract/api-search-github-user'

export class SearchGithubUser implements ISearchByGithubUser {
  constructor (private readonly apiSearchGithubUser: IApiSearchGithubUser) {

  }

  async search (data: { name: string }): Promise<IGithubUser> {
    const user = this.apiSearchGithubUser.search(data.name)

    return user
  }
}
