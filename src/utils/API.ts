import { NextApiResponse } from 'next'

export const invalidRoute = (res: NextApiResponse) => {
  return res.status(404).json({
    success: false,
    message: 'Invalid route.'
  })
}

/**
 *
 * @param res NextApiResponse
 * @param status Status code for response, such as 404
 * @param message Message to return as error
 * @returns JSON
 */
export const APIError = (
  res: NextApiResponse,
  status: number,
  message: string
) => {
  return res.status(status).json({
    success: false,
    message
  })
}
