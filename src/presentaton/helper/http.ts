import { IHttpResponse } from '../contract/httpResponse'

export const ok = <T>(data: T): IHttpResponse<T> => ({
  statusCode: 200,
  data
})
