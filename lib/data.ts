import { Project } from './types'

export const links = [
  {
    name: 'intro',
    hash: '#intro'
  },
  {
    name: 'skills',
    hash: '#skills'
  },
  {
    name: 'projects',
    hash: '#projects'
  },
  {
    name: 'posts',
    hash: '#posts'
  }
] as const

export const projects: Project[] = [
  {
    title: 'waterfall-vue',
    description: 'an easy to use waterfall component for vue3.',
    links: {
      github: 'https://github.com/imddc/vue-waterfall',
      preview: 'https://vue-waterfall.vercel.app'
    },
    tags: ['vue3', 'TypeScript', 'UnoCSS']
  },
  {
    title: 'mouse-animate',
    description:
      'Provide an animation that follows the mouse, simple and easy to use, no need for configuration.',
    links: {
      github: 'https://github.com/imddc/mouse-animation',
      preview: 'https://mouse-animation-sage.vercel.app/'
    },
    tags: ['vue3', 'TypeScript', 'UnoCSS']
  },
  {
    title: 'vauch',
    description:
      'Provide a convenient Vue development template, including file routing, automatic component importing, automatic API importing, development tools, and can be deployed on Vercel without configuration.',
    links: {
      github: 'https://github.com/imddc/vauch',
      preview: 'https://vauch-sepia.vercel.app/'
    },
    tags: ['vue3', 'TypeScript', 'UnoCSS']
  }
]

export const skills = [
  'HTML',
  'CSS',
  'Sass',
  'TailWind',
  'UnoCSS',
  'JavaScript',
  'TypeScript',
  'Vue',
  'React',
  'Vite',
  'Webpack',
  'Git',
  'GitHub',
  'Next',
  'Express',
  'koa',
  'Nest',
  'MySQL',
  'NeoVim'
] as const

// link to post - tag
export const postType = [
  'vue',
  'react',
  'vite',
  'next',
  'typescript',
  'javascript',
  'css',
  'git',
  'other'
] as const

const createPost = (id: number) => {
  return {
    id: id,
    title: 'title' + id,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fugit quaerat cum, unde fuga suscipit repellat, velit in quas nesciunt minima asperiores, ex aspernatur neque ratione eaque culpa est obcaecati.' +
      id,
    color: '#f86',
    link: '/post/' + id,
    tags: [
      {
        name: 'tag' + id,
        link: 'tag link'
      },
      {
        name: 'tag2' + id,
        link: 'tag link'
      }
    ]
  }
}

export const posts = Array.from({ length: 9 }).map((_, i) => createPost(i))
