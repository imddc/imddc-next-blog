import Intro from '~/components/homepage/intro'
import Posts from '~/components/homepage/posts'
import Projects from '~/components/homepage/projects/projects'
import Skills from '~/components/homepage/skills'

export default function RootPage() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
      <Posts />
    </>
  )
}
