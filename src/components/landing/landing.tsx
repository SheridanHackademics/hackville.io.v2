import React from "react"
import styles from "./landing.module.scss"
import * as BlackLogo from "../../images/logos/hackville-black.svg";
import * as WhiteHackademics from "../../images/logos/ha-wordmark-bw-white-SVG.svg";
import * as Pinwheel from "../../images/pinwheel.svg";
import * as Checker from "../../images/checker-pattern.svg";
import * as Triangles from "../../images/triple-triangles.svg";

const Landing = () => (
  <section id="#" className={styles.section}>
    <a id="mlh-trust-badge"
      className={styles.mlhBadge}
      href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
      target="_blank">
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg"
        alt="Major League Hacking 2021 Hackathon Season"
        className={styles.mlhBadgeImage} />
    </a>
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
      <div className={styles.applyText}>
        Applications are <strong>Closed</strong>
      </div>
      <div className={styles.applyButtonContainer}>
        <a
          target="_blank"
          rel="nofollow"
          role="button"
          className={styles.applyButtonParticipant}
          href="/Hackville2021-schedule.pdf" >
          View Event Schedule ⟶
          </a>
      </div>
      {/* <div className={styles.applyButtonContainer}>
        <a
          target="_blank"
          rel="nofollow"
          role="button"
          className={styles.applyButtonParticipant}
          href="https://forms.gle/DybWwtxyUw1xyNpAA" >
          Apply as a Participant ⟶
          </a>
        <a
          target="_blank"
          rel="nofollow"
          role="button"
          className={styles.applyButtonMentor}
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4dETxpkejRwTEarlBASANcosjKdRhJZWp2MFYZ8L8VFbMJA/viewform">
          Apply as a Mentor ⟶
          </a>
      </div> */}
    </div>
  </section >
)

export default Landing