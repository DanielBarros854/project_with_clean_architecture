import { IGithubUser } from '../../../src/domain/models/github-user'
import { ISearchByGithubUser } from '../../../src/domain/use-case/search-by-github-user'
import { SearchGithubUserController } from '../../../src/presentation/controllers/search-github-user'
import { ok } from '../../../src/presentation/helper'

class SearchGithubUserStub implements ISearchByGithubUser {
  async search (data: { name: string }): Promise<IGithubUser> {
    return {
      id: 1,
      name: 'any_name',
      email: 'any_email',
      avatarUrl: 'any_avatarUrl',
      publicRepos: 1,
      company: 'any_company',
      login: data.name,
      bio: 'any_bio',
      createdAt: 'any_createdAt'
    }
  }
}

describe('search githubUser controller', () => {
  it('should return with correct values', async () => {
    const sut = new SearchGithubUserController(new SearchGithubUserStub())

    const user = await sut.handle({ name: 'any_login' })

    expect(user).toEqual(ok({
      id: 1,
      name: 'any_name',
      email: 'any_email',
      avatarUrl: 'any_avatarUrl',
      publicRepos: 1,
      company: 'any_company',
      login: 'any_login',
      bio: 'any_bio',
      createdAt: 'any_createdAt'
    }))
  })
})
