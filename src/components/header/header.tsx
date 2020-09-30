import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"
import logo from "../../images/hackville-white.svg"

const Header = () => (
  <header> 
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.hamburger}><div></div></div> 
        <div>
          <Link to='#'><img src={logo}></img></Link>
        </div>
        <ul className={headerStyles.navbarUl}>
          <li><Link to='#about'>About</Link></li>
          <li><Link to='#previous-year'>2019</Link></li>
          <li><Link to='#faq'>FAQ</Link></li>
          <li><Link to='#get-involved'>Get Involved</Link></li>
          <li><Link to='#sponsors'>Sponsors</Link></li>
        </ul>
      </nav>
  </header>
)

export default Header