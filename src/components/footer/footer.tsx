import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({organization}) => (
  <footer>
      <Link to='/contact-us/'>Contact Us</Link>
      {organization}
  </footer>
)

Footer.propTypes = {
  organization: PropTypes.string,
}

Footer.defaultProps = {
  organization: `Hackademics`
}

export default Footer