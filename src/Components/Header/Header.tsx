import NavBar from './NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoWrapper = styled.div`
  border-radius: 5px;
  background-color: white;
  margin-bottom: 5px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 700px) {
    img {
      max-width: 60%;
    }
  }
`

function Header() {
  return (
    <div className="header-wrapper">
      <LogoWrapper>
        <Link to="/">
          <img src="/images/logo3.png" alt="Guitar Wiz" />
        </Link>
      </LogoWrapper>
      <NavBar />
    </div>
  )
}

export default Header
