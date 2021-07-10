import { NextApiRequest, NextApiResponse } from 'next'
const mc = require('@mailchimp/mailchimp_marketing')

import { invalidRoute, APIError } from '@utils/API'
import { emailRegex } from '@utils/helpers'

mc.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body

    if (!email || !email.match(emailRegex)) {
      return APIError(res, 404, 'Missing or invalid email address.')
    }

    const LIST_ID = process.env.MAILCHIMP_LIST_ID

    try {
      const addResponse = await mc.lists.addListMember(LIST_ID, {
        email_address: email,
        status: 'subscribed'
      })

      return res.status(200).json({
        success: true,
        message: 'You have been subscribed!',
        id: addResponse.id
      })
    } catch (e) {
      if (e.status === 400) {
        return APIError(res, 400, 'You are already subscribed.')
      } else {
        return APIError(res, 400, 'Something went wrong.')
      }
    }
  }

  return invalidRoute(res)
}
