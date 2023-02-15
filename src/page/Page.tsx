import { About } from '../components/about/About'
import { Contact } from '../components/contact/Contact'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Projects } from '../components/projects/Projects'
import { Section } from '../components/section/Section'
import { StickerFoguete } from '../components/stickerFoguete/StickerFoguete'
import { Technology } from '../components/technology/Technology'

export const Page = () => {
  return (
    <>
      <Header />
      <Section />
      <About />
      <Technology />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
