import React from "react";
import styles from "./sponsors.module.scss";
import Header from "../../images/headers/sponsors-header.svg";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const query = graphql`
  query {
    sponsor1: file(relativePath: { eq: "2021/sponsors/rbc-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor2: file(relativePath: { eq: "2021/sponsors/adobe--logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor3: file(relativePath: { eq: "2021/sponsors/redbull-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor4: file(relativePath: { eq: "2021/sponsors/alumnioffice-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor5: file(relativePath: { eq: "2021/sponsors/smrtcty-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor6: file(relativePath: { eq: "2021/sponsors/SSU.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor7: file(relativePath: { eq: "2021/sponsors/mlh.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor8: file(relativePath: { eq: "2021/sponsors/sheridan.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor9: file(relativePath: { eq: "2021/sponsors/SDG.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor10: file(relativePath: { eq: "2021/sponsors/balsamiq.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor11: file(relativePath: { eq: "2021/sponsors/echoar.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor12: file(relativePath: { eq: "2021/sponsors/VoiceFlow.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sponsor13: file(relativePath: { eq: "2021/sponsors/sticker-mule-logo-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo1: file(relativePath: { eq: "2019/sponsors/age-well-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo2: file(relativePath: { eq: "2019/sponsors/alumnioffice-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo3: file(relativePath: { eq: "2019/sponsors/aws-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo4: file(relativePath: { eq: "2019/sponsors/balsamiq-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo5: file(relativePath: { eq: "2019/sponsors/edge_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo6: file(relativePath: { eq: "2019/sponsors/elderresearch-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo7: file(relativePath: { eq: "2019/sponsors/github-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo8: file(relativePath: { eq: "2019/sponsors/IBM-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo9: file(relativePath: { eq: "2019/sponsors/icarehomehealth-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo10: file(relativePath: { eq: "2019/sponsors/mlh-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    photo11: file(relativePath: { eq: "2019/sponsors/sketch-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`


const Sponsors = () => {
  const imageData = useStaticQuery(query);
  return <section className={styles.section}>
    <div className={styles.header}>
      <img className={styles.headerImg} src={Header}></img>
      <p className={styles.headerMainText}>sponsors</p>
    </div>
    <div className={styles.content}>
      <p>
        Big thanks to this years sponsors.
      </p>
    </div>
    <div className={styles.images}>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor1.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 1" />
      </div>
      <div className={styles.photoContainer}>
        <Img style={{ transform: 'translateY(100%)' }} className={styles.photo} fluid={imageData.sponsor4.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img style={{ transform: 'translateY(67.5%)' }} className={styles.photo} fluid={imageData.sponsor7.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor6.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img style={{ transform: 'translateY(250%)' }} className={styles.photo} fluid={imageData.sponsor8.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img style={{ transform: 'translateY(40%)' }} className={styles.photo} fluid={imageData.sponsor9.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor2.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img style={{ transform: 'translateY(20%)' }} className={styles.photo} fluid={imageData.sponsor5.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <a href="http://hackp.ac/mlh-stickermule-hackathons" rel="nofollow" target="_blank">
          <Img style={{ transform: 'translateY(90%)' }} className={styles.photo} fluid={imageData.sponsor13.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
        </a>
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor10.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor11.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor12.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img style={{ transform: 'translateY(0%)' }} className={styles.photo} fluid={imageData.sponsor3.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
    </div>
    <hr />
    <div className={styles.content}>
      <p>
        Thank you to all of our past sponsors and partners.
      </p>
    </div>
    <div className={styles.images}>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo1.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 1" />
      </div>
      {/* <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo2.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div> */}
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.sponsor4.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 2" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo3.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo4.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo5.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo6.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo7.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo8.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo9.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo10.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
      <div className={styles.photoContainer}>
        <Img className={styles.photo} fluid={imageData.photo11.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="photo 3" />
      </div>
    </div>
  </section>
}

export default Sponsors;