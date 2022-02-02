import { IGithubUser } from '../../domain/models/github-user'
import { ISearchByGithubUser } from '../../domain/use-case/search-by-github-user'
import { IController } from '../contract/controller'
import { IHttpResponse } from '../contract/httpResponse'
import { internalServerError, ok } from '../helper'

export class SearchGithubUserController implements IController {
  constructor (
    private readonly searchGithubUser: ISearchByGithubUser
  ) {}

  async handle (data: { name: string }): Promise<IHttpResponse<IGithubUser>> {
    try {
      const { name } = data

      const user = await this.searchGithubUser.search({ name })

      return ok(user)
    } catch (error) {
      return internalServerError()
    }
  }
};
