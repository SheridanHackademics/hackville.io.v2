import React from "react"
import styles from "./about.module.scss"
import Header from "../../images/about-flower.svg"

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.header}>
      <img className={styles.headerImg} src={Header}></img>
      <p className={styles.headerMainText}>about</p>
    </div>

    <p className={styles.description}>
      One hundred students from all disciplines from the GTA are invited to come create, challenge, and solve a real-world issue this year at Sheridan College’s
      second annual hackathon. Hackville 2021 will bring together innovators, technology enthusiasts, designers, and entrepreneurs in a creative and collaborative
      environment. Hackville is a student-run event, where over 36 hours students are immersed in tech culture and encouraged to exercise their imagination to create
      interesting and innovative hacks to tackle real-world problems.
    </p>
  </section>
)

export default About