import React from "react"
import previousStyles from "./previous-year.module.css"
import recap from "../../images/headers/recap-header.svg"
import recapHackers from "../../images/hackers-star.svg"
import recapHours from "../../images/hours-triangle.svg"
import recapProjects from "../../images/projects-triangle.svg"
import recapPrizes from "../../images/prizes-blob.svg"

//Probably rename to recap and code for recapData can probably be refactored
const PreviousYear = () => (
    <section id="previous-year" className={previousStyles.recapSection}>
      <div className={previousStyles.recapHeader}>
        <img src={recap}></img>
        <p>hackville 2019 recap</p>
      </div>
      <div className={previousStyles.recapData}>
        <div className={previousStyles.data}>
          <img src={recapHackers}></img>
          <p>100</p>
          <p>Hackers</p>
        </div>
        <div className={previousStyles.data}>
          <img src={recapHours}></img>
          <p>42</p>
          <p>Hours</p>
        </div>
        <div className={previousStyles.data}>
          <img src={recapProjects}></img>
          <p>23</p>
          <p>Projects</p>
        </div>
        <div className={previousStyles.data}>
          <img src={recapPrizes}></img>
          <p>$4k</p>
          <p>Prizes</p>
        </div>
      </div>
    </section>
)

export default PreviousYear