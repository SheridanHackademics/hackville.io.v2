import React from "react"
import styles from "./landing.module.scss"
import * as BlackLogo from "../../images/logos/hackville-black.svg";
import * as WhiteHackademics from "../../images/logos/ha-wordmark-bw-white-SVG.svg";
import * as Pinwheel from "../../images/pinwheel.svg";
import * as Checker from "../../images/checker-pattern.svg";
import * as Triangles from "../../images/triple-triangles.svg";

const Landing = () => (
  <section id="#" className={styles.section}>
    <img className={styles.checker} src={Checker}></img>
    <img className={styles.pinwheel} src={Pinwheel}></img>
    <img className={styles.triangles} src={Triangles}></img>
    
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