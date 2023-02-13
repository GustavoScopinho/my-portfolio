import React from 'react'
import { Title } from './BoxTitle.styled'

interface ITitle {
  title?: string
}

export const BoxTitle = (props: ITitle) => {
  return (
    <>
      <Title>
        <h1>
          <span>────</span> {props.title} <span>────</span>
        </h1>
      </Title>
    </>
  )
}
