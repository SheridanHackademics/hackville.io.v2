import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"

const Header = () => (
  <header>  
      <nav className={headerStyles.navbar}>
        <div>
          <div >
          <Link className="navbar-logo" to='#'>Hackademics Logo</Link>
        </div>
        <ul className={headerStyles.navbarUl}>
          <li><Link style={{ color: `#fff` }} to='#about'>About</Link></li>
          <li><Link style={{ color: `#fff` }} to='#previous-year'>2019</Link></li>
          <li><Link style={{ color: `#fff` }} to='#faq'>FAQ</Link></li>
          <li><Link style={{ color: `#fff` }} to='#get-involved'>Get Involved</Link></li>
          <li><Link style={{ color: `#fff` }} to='#sponsors'>Sponsors</Link></li>
        </ul>
      </div>
      </nav>
    
  </header>
)

export default Header