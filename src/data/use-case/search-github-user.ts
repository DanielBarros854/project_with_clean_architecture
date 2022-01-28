import { IGithubUser } from '../../domain/models/github-user'
import { ISearchByGithubUser } from '../../domain/use-case/search-by-github-user'

export class SearchGithubUser implements ISearchByGithubUser {
  async search (data: { name: string }): Promise<IGithubUser> {
    return {
      id: 1,
      name: 'any_name',
      email: 'any_email',
      avatarUrl: 'any_avatarUrl',
      publicRepos: 1,
      company: 'any_company',
      login: 'any_login',
      bio: 'any_bio',
      createdAt: 'any_createdAt'
    }
  }
}
