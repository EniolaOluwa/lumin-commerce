import Link from "next/link";
import styled from "styled-components";
import NavBar from "./NavBar";

const Logo = styled.h1`
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: white;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    display: grid;
    align-items: stretch;
    justify-content: space-between;
    grid-template-columns: auto 1fr;
    border-bottom: 10px solid var(--black, black);
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Lumin</Link>
        </Logo>
        <NavBar />
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
    </HeaderStyles>
  );
}