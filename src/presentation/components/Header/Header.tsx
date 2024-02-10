import Image from 'next/image'
import { StyledHeader } from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <figure>
          <Image src={'/images/logo.png'} alt="logo" width={50} height={34} />
        </figure>
      </div>
    </StyledHeader>
  )
}

export default Header
