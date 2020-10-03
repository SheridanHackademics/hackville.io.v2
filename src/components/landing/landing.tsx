import React from "react"
import styles from "./landing.module.scss"
import * as BlackLogo from "../../images/logos/hackville-black.svg";
import * as WhiteHackademics from "../../images/logos/ha-wordmark-bw-white-SVG.svg";

const Landing = () => (
  <section id="#" className={styles.section}>
    <div className={styles.presents}>
      <div className={styles.triangleRight} />
      <div className={styles.presentsContainer}>
        <img className={styles.presentsContainerImg} src={WhiteHackademics} />
        <p>presents</p>
      </div>
      <div className={styles.triangleLeft} />
    </div>
    <img className={styles.mainLogo} src={BlackLogo} />
    <div className={styles.information}>
      <p>february 5 - 7, 2021</p>
      <p>virtual</p>
      <button className={styles.applyBtn}>Applications are opening soon</button>
    </div>
  </section >
)

export default Landing