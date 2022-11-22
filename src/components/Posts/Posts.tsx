import React from 'react'
import { PostType } from 'src/requests/posts'
import Post from '../Post/Post'
import './styles.scss'

type PostsProps = {
  posts: PostType[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  console.log('posts dans le component ?', posts)
  return (
    <main className='posts'>
      <h1 className='posts-title'>Terrible Blog</h1>
      <div className='posts-list'>
        {posts.map(({ id, ...rest }) => (
          <Post key={id} {...rest} />
        ))}
      </div>
    </main>
  )
}

export default React.memo(Posts)
