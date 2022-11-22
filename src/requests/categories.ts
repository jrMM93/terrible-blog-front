import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export type CategoryType = {
  id: number
  route: string
  label: string
}

// type GetCategoriesResponse = {
//   data: CategoryType[]
// }

export async function requestsCategories(): Promise<CategoryType[]> {
  try {
    const { data } = await axios.get<CategoryType[]>('/categories')
    // console.log('response', data)
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
