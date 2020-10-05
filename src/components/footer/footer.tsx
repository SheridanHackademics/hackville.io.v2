import React from "react"
import footerStyles from "./footer.module.css"
import logoInitial from "../../images/logos/ha-logo-bw-white-SVG.svg"
import facebook from "../../images/footer/facebook.svg"
import insta from "../../images/footer/instagram.svg"
import instagram from "../../images/footer/instagram.svg"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <ul>
      {/* <li>
        <Link to="/contact-us/">Contact Us</Link>
      </li> */}
      <li>
        <a href="/2021_hackville_sponsorship_package.pdf" rel="nofollow" target="_blank">Sponsorship Package</a>
      </li>
    </ul>
    <img src={logoInitial}></img>
    <div className={footerStyles.socials}>
      <a href="https://www.facebook.com/groups/hackademicsclub" rel="nofollow" target="_blank">
        <img src={facebook}></img>
      </a>
      <a href="https://www.instagram.com/hackademicsclub" rel="nofollow" target="_blank">
        <img src={instagram}></img>
      </a>
    </div>
  </footer>
)

export default Footer
