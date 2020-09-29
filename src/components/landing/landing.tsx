import React from "react"
import landingStyles from "./landing.module.css"

const Landing = () => (
    <section className={landingStyles.landing} id="#">
      <div className={landingStyles.hackademicsShape}> Hackademics presents</div>
      <h1 className={landingStyles.logo}>Hackville logo</h1>
      <p className={landingStyles.date}>february 5 - 7, 2021</p>
      <p className={landingStyles.landingP}>virtual</p>
      <button className={landingStyles.applicationBtn}>Applications are open</button>
      <a className={landingStyles.applyBtn}>Apply Now</a>
    </section>
)

export default Landing