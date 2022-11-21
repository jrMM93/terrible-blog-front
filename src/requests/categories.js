import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export async function requestsCategories() {
  try {
    const response = await axios.get('/categories')
    console.log(response)
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
