import axios from 'axios'
import { IApiSearchGithubUser } from '../../data/contract/api-search-github-user'

export class GetGithubUser implements IApiSearchGithubUser {
  async search (name: string): Promise<any> {
    const response = await axios.get(`https://api.github.com/users/${name}`)
    return response.data
  }
}
