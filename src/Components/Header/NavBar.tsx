import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  max-width: 100%;
  text-align: center;
  border-right: 1px solid transparent;
  transition: border-bottom 0.5s;
  width: fit-content;
  background-color: #c8c3cc;
  border-radius: 5px;
`;

const NavBarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1vw;
  padding-top: 0.5vw;
  padding-bottom: 0.5vw;
  padding-left: 1vw;
  width: 12vw;
  border-right: 1px solid gray;
  & a {
    color: #563f46;
    text-decoration: none;
    transition: color 0.5s;
  }
  & a:hover {
    color: rgb(116, 111, 111);
  }
  .lastNavElement {
    border-right: 0px;
  }
`;

export default function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarItemWrapper>
        <a href="/">Home</a>
      </NavBarItemWrapper>

      <NavBarItemWrapper>
        <a href="/basics">Basics</a>
      </NavBarItemWrapper>

      <NavBarItemWrapper>
        <a href="/chords">Chords</a>
      </NavBarItemWrapper>

      <NavBarItemWrapper>
        <a href="/chords-in-key">Chords in Key</a>
      </NavBarItemWrapper>

      <NavBarItemWrapper>
        <a href="/scales">Scales</a>
      </NavBarItemWrapper>

      <NavBarItemWrapper>
        <a href="/tips">Tips</a>
      </NavBarItemWrapper>

      <NavBarItemWrapper>
        <a href="/about">About</a>
      </NavBarItemWrapper>
    </NavBarWrapper>
  );
}
