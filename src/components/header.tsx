import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
  <header>
    {siteTitle}
    <div>
        <Link to='/'>Index</Link> - 
        <Link to='/about-us/'>About Us</Link> - 
        <Link to='/contact-us/'>Contact Us</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Hackville`,
}

export default Header