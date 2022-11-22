import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export type PostType = {
  id: number
  category: string
  slug: string
  title: string
  excerpt: string
  content: string
}

export async function requestsPosts(): Promise<PostType[]> {
  try {
    const { data } = await axios.get<PostType[]>('/posts')
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
