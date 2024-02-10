'use client'

import React from 'react'
import { StyledMainTemplate } from './MainTemplate.styles'
import Header from '../components/Header/Header'

type MainTemplateProps = {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <StyledMainTemplate>
      <Header />
      <div className="container">{children}</div>
    </StyledMainTemplate>
  )
}

export default MainTemplate
