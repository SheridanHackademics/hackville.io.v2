import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// Styles are temporary
const NavBar = styled.nav
  `
    top: 0px;
    left: 0px;
    width: 100%;
    height: 96px;
    background: var(--unnamed-color-000000) 0% 0% no-repeat padding-box;
    background: #000000 0% 0% no-repeat padding-box;
    opacity: 1;
  `

const Ul = styled.ul
  `
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 525px;
    opacity: 1;
    float: right;
    display: flex;
  `

const Li = styled.li
  `
    margin: 2px;
  `
const linkStyle = {
  color: '#white'
}

const Header = () => (
  <header>  
      <NavBar>
        <div>
          <div >
          <Link to='#'>Hackademic Logo</Link>
        </div>
        <Ul>
          <Li><Link style={{ color: `#fff` }} to='#about'>About</Link></Li>
          <Li><Link style={{ color: `#fff` }} to='#previous-year'>2019</Link></Li>
          <Li><Link style={{ color: `#fff` }} to='#faq'>FAQ</Link></Li>
          <Li><Link style={{ color: `#fff` }} to='#get-involved'>Get Involved</Link></Li>
          <Li><Link style={{ color: `#fff` }} to='#sponsors'>Sponsors</Link></Li>
        </Ul>
      </div>
      </NavBar>
    
  </header>
)

export default Header