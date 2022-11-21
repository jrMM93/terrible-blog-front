import { useQuery } from '@tanstack/react-query'
import Header from './components/Header'
import { requestsCategories } from './requests/categories'
// import { requestsPosts } from './requests/posts'

const App: React.FC = () => {
  // const postsQuery = useQuery(['posts'], requestsPosts)
  const categoriesQuery = useQuery(['categories'], requestsCategories)
  console.log(categoriesQuery.data)

  if (categoriesQuery.isError) {
    return <h1>An error occured</h1>
  }

  if (categoriesQuery.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='blog'>
      <Header categories={categoriesQuery.data} isLoading={categoriesQuery.isLoading} />
    </div>
  )
}
export default App
