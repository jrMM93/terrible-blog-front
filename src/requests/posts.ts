import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.baseURL = 'https://oclock-open-apis.vercel.app/api/blog'

export type PostType = {
  id: number
  category: string
  slug: string
  title: string
  excerpt: string
  content: string
}

// 2sec delay to test the spinner while we wait for the response
const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

export async function requestsPosts(): Promise<PostType[]> {
  try {
    const { data } = await axios.get<PostType[]>('/posts')
    await delay()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
