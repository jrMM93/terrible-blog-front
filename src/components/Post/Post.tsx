import React from 'react'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'
import './styles.scss'

type PostProps = {
  slug: string
  title: string
  category: string
  excerpt: string
}

const Post: React.FC<PostProps> = ({ slug, title, category, excerpt }) => {
  function createExcerptHTML() {
    // clean dirty excerpt to prevent XSS attacks
    const cleanExcerpt = DOMPurify.sanitize(excerpt)
    return { __html: cleanExcerpt }
  }

  return (
    <article className='post'>
      <Link to={`/posts/${slug}`}>
        <h2 className='post-title'>{title}</h2>
        <div className='post-category'>{category}</div>
        <p
          className='post-excerpt'
          dangerouslySetInnerHTML={createExcerptHTML()} // inject cleaned HTML
        />
      </Link>
    </article>
  )
}

export default React.memo(Post)
