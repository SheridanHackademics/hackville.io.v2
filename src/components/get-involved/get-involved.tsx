import React from "react";
import * as styles from "./get-involved.module.scss";
import Header from "../../images/headers/getinvolved-header.svg";
import { Link } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const query = graphql`
  query {
    volunteer: file(relativePath: { eq: "volunteer-button@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
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
    mentor: file(relativePath: { eq: "mentor-button@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
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
    contribute: file(relativePath: { eq: "sponsor-button@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
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

interface IProps {
  title: string,
  photo: any,
  extraStyles?: string,
}

const Involvement = ({ title, photo, extraStyles }: IProps) => (
  <div className={styles.involvement}>
    <Img className={styles.involvementPhoto + " " + extraStyles} fluid={photo.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 1" />
    <h3 className={styles.involvementTitle}>{title}</h3>
  </div>
)

const GetInvolved = () => {
  const imageData = useStaticQuery(query);

  return <section id="get-involved" className={styles.section}>
    <div className={styles.header}>
      <img className={styles.headerImg} src={Header}></img>
      <p className={styles.headerMainText}>Frequently asked questions</p>
    </div>
    <div className={styles.content}>
      <p>
        Without volunteers, mentors, and sponsors, Hackville would never be
        possible. We are looking for people to volunteer or mentor at Hackville
        2021, as well as sponsors for our event —
        <Link to="#">click below.</Link>
      </p>
    </div>
    <div className={styles.content}>
      <Involvement title="Volunteer" photo={imageData.volunteer.childImageSharp} />
      <Involvement title="Mentor" photo={imageData.mentor.childImageSharp} />
      <Involvement title="Contribute" photo={imageData.contribute.childImageSharp} extraStyles={styles.involvementPhotoSmall} />
    </div>
  </section>
}

export default GetInvolved