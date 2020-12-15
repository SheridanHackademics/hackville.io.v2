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

import styles from "./app.module.scss"
import SEO from "./seo"

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
`

const App = () => {
  const data = useStaticQuery(query)

  return (
    <React.Fragment>
      <SEO title="Hackville 2021"></SEO>
      <div id="top" />
      <Header />
      <main className="main">
        <Landing />
        <div style={{ marginBottom: '120px' }} id="about" />
        <About />
        <div style={{ marginBottom: '120px' }} id="previous-year" />
        <PreviousYear />
        <div style={{ marginBottom: '100px' }} id="faq" />
        <Faq />
        <div style={{ marginBottom: '100px' }} id="get-involved" />
        <GetInvolved />
        <div style={{ marginBottom: '100px' }} id="sponsors" />
        <Sponsors />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
