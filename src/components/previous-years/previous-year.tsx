import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import * as styles from "./previous-year.module.scss";
import recap from "../../images/headers/recap-header.svg";
import recapHackers from "../../images/hackers-star.svg";
import recapHours from "../../images/hours-triangle.svg";
import recapProjects from "../../images/projects-triangle.svg";
import recapPrizes from "../../images/prizes-blob.svg";
import greenRect from "../../images/green-rect.svg";
import sparkle from "../../images/sparkle.svg";

const query = graphql`
  query {
    photo1: file(relativePath: { eq: "photos/photo1.png" }) {
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
    photo2: file(relativePath: { eq: "photos/photo2.png" }) {
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
    photo3: file(relativePath: { eq: "photos/photo3.png" }) {
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

interface IStat {
  image: any,
  text: string,
  subText: string,
}

const Stat = ({ image, text, subText }: IStat) => (
  <div className={styles.stat}>
    <img className={styles.statImage} src={image}></img>
    <p className={styles.statSubText} >{subText}</p>
    <p className={styles.statText} >{text}</p>
  </div>
);

//Probably rename to recap and code for recapData can probably be refactored
const PreviousYear = () => {
  const imageData = useStaticQuery(query);
  const data: IStat[] = [
    {
      image: recapHackers,
      subText: "100",
      text: "hackers"
    },
    {
      image: recapHours,
      subText: "42",
      text: "hours"
    },
    {
      image: recapProjects,
      subText: "23",
      text: "projects"
    },
    {
      image: recapPrizes,
      subText: "$4k",
      text: "prizes"
    }
  ];

  return <section id="previous-year" className={styles.section}>
    <img className={styles.sparkle} src={sparkle}></img>
    <img className={styles.greenRect} src={greenRect} />
    <div className={styles.header}>
      <img className={styles.headerImg} src={recap}></img>
      <p className={styles.headerMainText}>hackville 2019 recap</p>
    </div>
    <div className={styles.list}>
      {data.map(d => <Stat key={d.text} image={d.image} text={d.text} subText={d.subText} />)}
    </div>
    <div className={styles.images}>
      <Img className={styles.photo} fluid={imageData.photo1.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 1" />
      <Img className={styles.photo} fluid={imageData.photo2.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 2" />
      <Img className={styles.photo} fluid={imageData.photo3.childImageSharp.fluid} objectFit="cover" objectPosition="100% 100%" alt="photo 3" />
    </div>
  </section>
}

export default PreviousYear