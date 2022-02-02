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

type IMakeSut = {
  sut: SearchGithubUser
  apiSearchGithubUserStub: ApiSearchGithubUserStub
}

const makeSut = (): IMakeSut => {
  const apiSearchGithubUserStub = new ApiSearchGithubUserStub()
  const sut = new SearchGithubUser(apiSearchGithubUserStub)
  return {
    sut,
    apiSearchGithubUserStub
  }
}

describe('Search GithubUser data', () => {
  it('should return with correct values', async () => {
    const { sut } = makeSut()
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

  it('should throw if apiSearchGithubUser throws', async () => {
    const { sut, apiSearchGithubUserStub } = makeSut()

    jest.spyOn(apiSearchGithubUserStub, 'search').mockRejectedValueOnce(new Error('ERRO'))

    const sutReturn = sut.search({ name: 'any_login' })
    await expect(sutReturn).rejects.toThrow('ERRO')
  })

  it('should call apiSearchGithubUser with correct values', async () => {
    const { sut, apiSearchGithubUserStub } = makeSut()

    const apiSearchGithubUserSpy = jest.spyOn(apiSearchGithubUserStub, 'search')

    await sut.search({ name: 'any_login' })
    expect(apiSearchGithubUserSpy).toBeCalledWith('any_login')
  })
})
