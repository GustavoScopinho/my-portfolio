import { About } from '../components/about/About'
import { Header } from '../components/header/Header'
import { Projects } from '../components/projects/Projects'

import { Section } from '../components/section/Section'
import { Technology } from '../components/technology/Technology'

export const Page = () => {
  return (
    <>
      <Header />
      <Section />
      <About />
      <Technology />
      <Projects />
    </>
  )
}
