'use client'

import { StyledCard } from './Card.styles'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
