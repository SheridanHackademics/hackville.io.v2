import React, { useState } from "react"
import { Link } from "gatsby"
import * as Logo from "../../images/logos/hackville-white.svg";
import * as styles from "./header.module.scss";

const Header: React.FC = () => {
  const [state, setState] = useState(false);

  let navListVisibility = (state) ? styles.navListShow : styles.navListHidden;
  let navList = styles.navList + " " + navListVisibility;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navMobile}>
          <div onClick={() => setState(!state)} className={styles.navBurger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link to='#' className={styles.navLogo}><img className={styles.navLogo} src={Logo} /></Link>
        </div>
        <ul className={navList} >
          <li className={styles.navListLink}>
            <Link onClick={() => setState(!state)} to='#about'>About</Link>
          </li>
          <li className={styles.navListLink}>
            <Link onClick={() => setState(!state)} to='#previous-year'>Hackville 2019</Link>
          </li>
          <li className={styles.navListLink}>
            <Link onClick={() => setState(!state)} to='#faq'>FAQ</Link>
          </li>
          <li className={styles.navListLink}>
            <Link onClick={() => setState(!state)} to='#get-involved'>Get Involved</Link>
          </li>
          <li className={styles.navListLink}>
            <Link onClick={() => setState(!state)} to='#sponsors'>Sponsors</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 