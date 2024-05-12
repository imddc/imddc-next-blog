import { links } from '~/lib/data'

export interface Project {
  title: string
  description: string
  links: { github: string; preview: string }
  tags: string[]
}

export type LinkType = (typeof links)[number]['name']

export interface Post {
  id: number
  title: string
  description: string
  color: string
  link: string
  tags: PostTag[]
}
export interface PostTag {
  name: string
  link: string
}
