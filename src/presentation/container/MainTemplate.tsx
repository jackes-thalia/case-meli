'use client'

import React from 'react'
import { StyledMainTemplate } from './MainTemplate.styles'

type MainTemplateProps = {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <StyledMainTemplate>
      <div className="container">{children}</div>
    </StyledMainTemplate>
  )
}

export default MainTemplate
