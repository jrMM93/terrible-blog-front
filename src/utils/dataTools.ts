import { PostType } from 'src/requests/posts'

export function getPostsByCategory(posts: PostType[], category: string) {
  if (category === 'Accueil') {
    return posts
  }

  return posts.filter((post) => post.category === category)
}

export function findPostBySlug(posts: PostType[], slug: string | undefined) {
  return posts.find((post) => post.slug === slug)
}
