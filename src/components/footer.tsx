import PropTypes from "prop-types"
import React from "react"

const Footer = ({organization}) => (
  <footer>
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