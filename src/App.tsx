import { useQueries } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'
import Spinner from './components/Spinner/Spinner'

import { requestsCategories } from './requests/categories'
import { requestsPosts } from './requests/posts'
import { getPostsByCategory } from './utils/dataTools'

import './styles.scss'

const App: React.FC = () => {
  const [postsQuery, categoriesQuery] = useQueries({
    queries: [
      {
        queryKey: ['posts'],
        queryFn: requestsPosts,
      },
      {
        queryKey: ['categories'],
        queryFn: requestsCategories,
      },
    ],
  })

  if (postsQuery?.isError || categoriesQuery?.isError) {
    return <h1>An error occured</h1>
  }

  if (postsQuery?.isLoading || categoriesQuery?.isLoading) {
    return <Spinner />
  }

  return (
    <div className='blog'>
      <Header categories={categoriesQuery.data} />
      <Routes>
        {categoriesQuery.data.map(({ route, label }) => (
          <Route
            key={route}
            path={route}
            element={<Posts posts={getPostsByCategory(postsQuery.data, label)} />}
          />
        ))}
        <Route path='*' element={'404'} />
      </Routes>
    </div>
  )
}
export default App
