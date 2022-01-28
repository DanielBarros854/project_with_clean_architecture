import { SearchGithubUser } from '../../../src/data/use-case/search-github-user'

describe('Search GithubUser data', () => {
  it('should return with correct values', async () => {
    const sut = new SearchGithubUser()
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
