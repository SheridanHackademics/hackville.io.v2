import { Link } from "@reach/router"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import About from "./about/about"
import Faq from "./faq/faq"
import Footer from "./footer/footer"
import GetInvolved from "./get-involved/get-involved"
import Header from "./header/header"
import Landing from "./landing/landing"
import PreviousYear from "./previous-years/previous-year"
import Sponsors from "./sponsors/sponsors"

import styles from "./app.module.scss";

const query = graphql`
 query GetApplyPicture {
    file(relativePath: { eq: "apply-badge@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const App = () => {
  const data = useStaticQuery(query);

  return (
    <React.Fragment>
      <Header />
      <main style={{ position: 'relative' }}>
        <Landing />
        <About />
        <PreviousYear />
        <Faq />
        <GetInvolved />
        <Sponsors />
        <Link to="#" className={styles.apply}>
          <Img className={styles.applyImg}
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Apply Button"
          />
        </Link>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App;