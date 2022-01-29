import { Request, Response } from 'express'
import { IController } from '../../presentaton/contract/controller'

export const adaptRouter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.data)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.data.message
      })
    }
  }
}
