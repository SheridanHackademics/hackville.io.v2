import React from "react"
import footerStyles from "./footer.module.scss"
import logoInitial from "../../images/logos/ha-logo-bw-white-SVG.svg"
import facebook from "../../images/footer/facebook.svg"
import insta from "../../images/footer/instagram.svg"
import instagram from "../../images/footer/instagram.svg"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <ul>
      <li>
        <a href="/Hackville2021-schedule.pdf" rel="nofollow" target="_blank">View Event Schedule</a>
      </li>
      <li>
        <a href="mailto:sheridanhackville@gmail.com">Contact Us</a>
      </li>
      <li>
        <a href="/2021_hackville_sponsorship_package.pdf" rel="nofollow" target="_blank">Sponsorship Package</a>
      </li>
      <li>
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" rel="nofollow" target="_blank">Code of Conduct</a>
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
