import { links } from '~/lib/data'

export interface Project {
  title: string
  description: string
  links: { github: string; preview: string }
  tags: string[]
}

export type LinkType = (typeof links)[number]['name']
