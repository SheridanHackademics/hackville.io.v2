import React, { useState } from "react"
import * as styles from "./faq.module.scss";
import Header from "../../images/headers/faq-header.svg"
import Star from "../../images/contact-star.svg"

interface IFaq {
  title: string,
  description: string,
}

const Description = ({ title, description }: IFaq) => {
  let [state, setState] = useState(false);

  let active = (state) ? styles.active : styles.hidden;

  return <li className={styles.listItem}>
    <h3 onClick={() => setState(!state)} className={styles.listItemTitle}>
      {title}
    </h3>
    <p className={styles.listItemDescription + " " + active} dangerouslySetInnerHTML={{ __html: description }}>
    </p>
  </li>
}

const Faq = () => {
  const faqs: IFaq[] = [
    {
      title: "What is a Hackathon?",
      description: "A hackathon is a sprint-like event where innovators and inventors, usually students, can come together to solve real-world challenges using technology. They can be as long as an weekend."
    },
    {
      title: "I don’t know any coding. Can I still compete?",
      description: "Yes! As a beginner-friendly hackathon, we will set you up with the knowledge you need to start your first hackathon project, along with mentors."
    },
    {
      title: "How much does it cost?",
      description: "Hackville is completely free for 120 students! We want to make our event as accessible as possible, regardless of financial ability or otherwise."
    },
    {
      title: "How do teams work?",
      description: "We are allowing team sizes of up to 4 people on a team. You can come with a team, though we highly encourage creating your team at the event! At the very beginning of the hackathon we will hold a team building session for anybody who does not have a team at that time."
    },
    {
      title: "What can I build?",
      description: "Anything! We encourage any and all forms of solutions: whether it’s a game, app, hardware, AR, or anything at all."
    },
    {
      title: "Can I start working on my hack before the hackathon?",
      description: "No, you will be disqualified if a submitted project was worked on prior to the hackathon weekend. All coding and design work must be done during the hackathon weekend."
    },
    {
      title: "Do I need to bring anything?",
      description: "Laptop, pens, paper and any other tools you may use to solve problems. We will provide a safe, inclusive work collaboration environment for all teams."
    },
    {
      title: "Is there a code of conduct?",
      description: "Yes! We are using the MLH code of conduct. If you are interested in learning more click <a style='color: blue; font-size: 14px' href='mailto:sheridanhackville@gmail.com'>here</a>."
    },
    {
      title: "My question isn’t here. Who can I contact?",
      description: "No worries, please e-mail us at <a style='color: blue; font-size: 14px' href='mailto:sheridanhackville@gmail.com' />sheridanhackville@gmail.com</a> and we will be more than happy to answer your question!"
    }
  ];


  return <section className={styles.section}>
    <div className={styles.header}>
      <img className={styles.headerImg} src={Header}></img>
      <p className={styles.headerMainText}>frequently asked questions</p>
    </div>
    <div className={styles.content}>
      <ul className={styles.list}>
        {faqs.map((item, i) =>
          <Description key={i} title={item.title} description={item.description} />
        )}
      </ul>
      <a rel="nofollow" href="mailto:sheridanhackville@gmail.com" className={styles.star}>
        <img className={styles.starImage} src={Star}></img>
        <p className={styles.starText}>Contact Us</p>
      </a>
    </div>
  </section>
};

export default Faq