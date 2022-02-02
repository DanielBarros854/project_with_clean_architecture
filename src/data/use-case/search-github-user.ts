import { IGithubUser } from '../../domain/models/github-user'
import { ISearchByGithubUser } from '../../domain/use-case/search-by-github-user'
import { IApiSearchGithubUser } from '../contract/api-search-github-user'

export class SearchGithubUser implements ISearchByGithubUser {
  constructor (private readonly apiSearchGithubUser: IApiSearchGithubUser) {

  }

  async search (data: { name: string }): Promise<IGithubUser> {
    const user = await this.apiSearchGithubUser.search(data.name)

    return {
      id: user.id,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      company: user.company,
      createdAt: user.created_at,
      email: user.email,
      login: user.login,
      name: user.name,
      publicRepos: user.public_repos
    }
  }
}
