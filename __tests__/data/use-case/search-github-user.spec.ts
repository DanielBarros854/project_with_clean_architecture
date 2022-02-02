import { SearchGithubUser } from '../../../src/data/use-case/search-github-user'
import { IApiSearchGithubUser } from '../../../src/data/contract/api-search-github-user'

class ApiSearchGithubUserStub implements IApiSearchGithubUser {
  async search (name: string): Promise<any> {
    return {
      id: 1,
      name: 'any_name',
      email: 'any_email',
      avatar_url: 'any_avatarUrl',
      public_repos: 1,
      company: 'any_company',
      login: 'any_login',
      bio: 'any_bio',
      created_at: 'any_createdAt'
    }
  }
}

describe('Search GithubUser data', () => {
  it('should return with correct values', async () => {
    const sut = new SearchGithubUser(new ApiSearchGithubUserStub())
    const user = await sut.search({ name: 'any_login' })

    expect(user).toEqual({
      id: 1,
      name: 'any_name',
      email: 'any_email',
      avatarUrl: 'any_avatarUrl',
      publicRepos: 1,
      company: 'any_company',
      login: 'any_login',
      bio: 'any_bio',
      createdAt: 'any_createdAt'
    })
  })
})
