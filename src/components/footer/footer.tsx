import { Link } from "gatsby"
import React from "react"
import footerStyles from "./footer.module.css"
import logoInitial from "../../images/logos/ha-logo-bw-white-SVG.svg"
import facebook from "../../images/footer/facebook.svg"
import instagram from "../../images/footer/instagram.svg"

const Footer = () => (
  <footer className={footerStyles}>
      <ul>
        <li><Link to="/contact-us/">Contact Us</Link></li>
        <li><Link to="">Sponsorship Package</Link></li>
      </ul>
      <img src={logoInitial}></img>
      <div className={footerStyles.socials}>
        <Link to=""><img src={facebook}></img></Link>
        <Link to=""><img src={instagram}></img></Link>        
      </div>
  </footer>
)

export default Footer