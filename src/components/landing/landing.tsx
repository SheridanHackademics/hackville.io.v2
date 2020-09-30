import React from "react"
import landingStyles from "./landing.module.css"
import logo from "../../images/hackville-black.svg"

const Landing = () => (
    <section className={landingStyles.landing} id="#">
      <div className={landingStyles.hackademicsShape}> Hackademics presents</div>
      <h1 className={landingStyles.logo}><img src={logo}></img></h1>
      <div>
        <div className={landingStyles.date}>february 5 - 7, 2021</div>
        <p className={landingStyles.landingP}>virtual</p>
      </div>
      <div className={landingStyles.btn}>
        <button className={landingStyles.applicationBtn}>Applications are open</button>
        <a className={landingStyles.applyBtn}>Apply Now</a>
      </div>
    </section>
)

export default Landing