import React from "react"
import aboutStyles from "./about.module.css"
import flower from "../../images/about-flower.svg"

const About = () => (
    <section id="about" className={aboutStyles.aboutSection}>
      <div className={aboutStyles.aboutFlower}>
        <img src={flower}></img>
        <p>about</p>
      </div>
      
      <p>One hundred students from all disciplines from the GTA are invited to come create, challenge, and solve a real-world issue this year at Sheridan College’s 
        second annual hackathon. Hackville 2021 will bring together innovators, technology enthusiasts, designers, and entrepreneurs in a creative and collaborative 
        environment. Hackville is a student-run event, where over 36 hours students are immersed in tech culture and encouraged to exercise their imagination to create 
        interesting and innovative hacks to tackle real-world problems.
      </p>
    </section>
)

export default About