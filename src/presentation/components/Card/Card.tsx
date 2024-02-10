'use client'

import { StyledCard } from './Card.styles'

type CardProps = {
  children: React.ReactNode
  size?: 'small' | 'large'
}

const Card = ({ children, size = 'small' }: CardProps) => {
  return <StyledCard size={size}>{children}</StyledCard>
}

export default Card
