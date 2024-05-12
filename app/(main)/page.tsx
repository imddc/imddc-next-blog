import Intro from '~/components/homepage/intro'
import PageWrapper from '~/components/homepage/page-wrapper'
import Posts from '~/components/homepage/posts'
import Projects from '~/components/homepage/projects/projects'
import Skills from '~/components/homepage/skills'

export default function RootPage() {
  return (
    <PageWrapper>
      <Intro />
      <Skills />
      <Projects />
      <Posts />
    </PageWrapper>
  )
}
