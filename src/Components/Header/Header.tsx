import NavBar from './NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoWrapper = styled.div`
  text-align: center;
  font-size: 22px;
  padding: 0.5rem 0 0.5rem 0;
  border-radius: 5px;
  background-color: white;

  a {
    text-decoration: none;
    &:hover,
    &:visited,
    &:active {
      color: #000;
    }
  }
  a > h1 {
    margin 0;
    font-family: 'New Rocker', cursive;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`

function Header() {
  return (
    <div className="header-wrapper">
      <LogoWrapper>
        <Link to="/">
          <h1>Guitar Wiz</h1>
        </Link>
      </LogoWrapper>
      <NavBar />
    </div>
  )
}

export default Header
