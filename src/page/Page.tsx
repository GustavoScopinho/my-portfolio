import { About } from '../components/about/About'
import { Contact } from '../components/contact/Contact'
import { Header } from '../components/header/Header'
import { Projects } from '../components/projects/Projects'

import { Section } from '../components/section/Section'
import { Technology } from '../components/technology/Technology'
import { Wave } from '../components/wave/Wave'
import { WavesOpacity } from '../components/wavesOpacity/WavesOpacity'

export const Page = () => {
  return (
    <>
      <Header />
      <Section />
      <About />
      <Technology />
      <Projects />
      <Contact />
    </>
  )
}
