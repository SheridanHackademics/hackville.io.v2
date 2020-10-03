import React from "react";
import styles from "./sponsors.module.scss";
import Header from "../../images/headers/sponsors-header.svg";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const query = graphql`
  query {
    photo1: file(relativePath: { eq: "sponsors/age-well-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo2: file(relativePath: { eq: "sponsors/alumnioffice-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo3: file(relativePath: { eq: "sponsors/aws-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo4: file(relativePath: { eq: "sponsors/balsamiq-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo5: file(relativePath: { eq: "sponsors/edge_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo6: file(relativePath: { eq: "sponsors/elderresearch-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo7: file(relativePath: { eq: "sponsors/github-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo8: file(relativePath: { eq: "sponsors/IBM-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo9: file(relativePath: { eq: "sponsors/icarehomehealth-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo10: file(relativePath: { eq: "sponsors/mlh-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
    photo11: file(relativePath: { eq: "sponsors/sketch-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    },
  }
`


const Sponsors = () => {
  const imageData = useStaticQuery(query);
  return <section id="sponsors" className={styles.section}>
    <div className={styles.header}>
      <img className={styles.headerImg} src={Header}></img>
      <p className={styles.headerMainText}>Sponsors</p>
    </div>
    <div className={styles.content}>
      <p>
        Thank you to all of our previous sponsors and partners.
      </p>
    </div>
    <div className={styles.images}>
      <Img className={styles.photo} fluid={imageData.photo1.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 1" />
      <Img className={styles.photo} fluid={imageData.photo2.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 2" />
      <Img className={styles.photo} fluid={imageData.photo3.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo4.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo5.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo6.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo7.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo8.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo9.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo10.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
      <Img className={styles.photo} fluid={imageData.photo11.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
    </div>
  </section>
}

export default Sponsors;