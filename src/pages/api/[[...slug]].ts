import { NextApiRequest, NextApiResponse } from 'next'

import { invalidRoute } from '@utils/API'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return invalidRoute(res)
}
