import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { PostType } from 'src/requests/posts'
import { findPostBySlug } from '../../utils/dataTools'
import Spinner from '../Spinner/Spinner'

import './styles.scss'

type SingleProps = {
  posts: PostType[]
}

const Single: React.FC<SingleProps> = ({ posts }) => {
  const { slug } = useParams()

  if (posts.length === 0) {
    // si on a aucun posts on affiche que l'on attend le chargement des posts
    return <Spinner />
  }

  const currentPost = findPostBySlug(posts, slug)
  console.log(currentPost)

  if (!currentPost) {
    // si on a pas reussi a trouver de post correspondant, on envoie sur la page 404 à l'aide du composant Navigate
    return <Navigate to='/404' />
  }

  return (
    <article className={'single'}>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.content}</p>
    </article>
  )
}

export default Single
