import { SearchGithubUserController } from '../../../src/presentaton/controllers/search-github-user'

describe('search githubUser controller', () => {
  it('should return with correct values', async () => {
    const sut = new SearchGithubUserController()

    const user = await sut.search({ name: 'any_name' })

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
