import { IHttpResponse } from './httpResponse'

export type IController<T = any> = {
  handle: (request: any) => Promise<IHttpResponse<T>>
}
