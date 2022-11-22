import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

type PostProps = {
  slug: string
  title: string
  category: string
}

const Post: React.FC<PostProps> = ({ slug, title, category }) => {
  return (
    <article className='post'>
      <Link to={`/posts/${slug}`}>
        <h2 className='post-title'>{title}</h2>
        <div className='post-category'>{category}</div>
      </Link>
    </article>
  )
}

export default React.memo(Post)
