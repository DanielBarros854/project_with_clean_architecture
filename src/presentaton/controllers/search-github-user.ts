import { IGithubUser } from '../../domain/models/github-user'
import { ISearchByGithubUser } from '../../domain/use-case/search-by-github-user'

export class SearchGithubUserController implements ISearchByGithubUser {
  constructor (
    private readonly searchGithubUser: ISearchByGithubUser
  ) {}

  async search (data: { name: string }): Promise<IGithubUser> {
    const user = await this.searchGithubUser.search(data)

    return user
  }
};
