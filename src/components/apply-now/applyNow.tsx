import React from "react";
import styles from "./applyNow.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const query = graphql`
    query {
        file(relativePath: { eq: "apply-badge@2x.png" }) {
            childImageSharp {
                fixed(width: 120, height: 120) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const ApplyNow = () => {
    const data = useStaticQuery(query);

    return <div className={styles.apply}>
        <a rel="nofollow" target="_blank" href="https://forms.gle/DybWwtxyUw1xyNpAA">
            <Img className={styles.applyImg} fixed={data.file.childImageSharp.fixed} alt="apply now button" />
        </a>
    </div>
}

export default ApplyNow