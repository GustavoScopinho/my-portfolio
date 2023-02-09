import React from 'react'
import { About } from '../components/about/About'
import { Header } from '../components/header/Header'
import { Section } from '../components/section/Section'
import { Technology } from '../components/technology/Technology'
import { Wave } from '../components/wave/Wave'
import { WavesOpacity } from '../components/wavesOpacity/WavesOpacity'

export const Page = () => {
  return (
    <>
      <Header />
      <Section />
      <Wave />
      <About />
      <WavesOpacity />
      <Technology />
    </>
  )
}
