export const links = [
  {
    name: 'intro',
    hash: '#intro'
  },
  {
    name: 'posts',
    hash: '#posts'
  },
  {
    name: 'projects',
    hash: '#projects'
  },
  {
    name: 'skills',
    hash: '#skills'
  },
  {
    name: 'contact',
    hash: '#contact'
  }
] as const

export const projects = [
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
]
