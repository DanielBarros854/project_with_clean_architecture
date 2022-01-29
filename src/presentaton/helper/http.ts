import { IHttpResponse } from '../contract/httpResponse'

export const ok = <T>(data: T): IHttpResponse<T> => ({
  statusCode: 200,
  data
})

export const internalServerError = (): IHttpResponse => ({
  statusCode: 500,
  data: new Error('Internal Error...')
})
