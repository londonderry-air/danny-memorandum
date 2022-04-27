import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../../types'
import { API_ORIGIN } from '../../../utils/variables'

export const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Post>
  ) => {
    const { query: { slug }} = req
    const apiRoute = API_ORIGIN + '/api/v1/post'
    const params = {slug: (slug as string[]).join('/')}
    const query = new URLSearchParams(params)

    console.log(`${apiRoute}?${query}`)

    const apiRes = await fetch(`${apiRoute}?${query}`)
    const post = await apiRes.json()
    res.status(200).json(post)
}
  
export default handler