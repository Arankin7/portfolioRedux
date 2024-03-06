//import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImg.png")} alt="Picture of me at a young age" className={styles.aboutImg}></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/gameDev.png")} alt="Game Developer Icon"></img>
                            <div className={styles.aboutItemText}>
                                <h3>Game Developer</h3>
                                <p>
                                    Comfortable with popular game engines such as Unity and Unreal. Utilizes frameworks to implement new game mechanics.
                                </p>
                            </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/webDev.png")} alt="Web Development Icon"></img>
                            <div className={styles.aboutItemText}>
                                <h3>Full Stack Web Developer</h3>
                                <p>
                                    Committed Full Stack Developer who has a desire to continuously improve skills and broaden knowledge. Equipped with a solid foundation in HTML5, CSS3, Javascript, jQuery, and an ever growing skill-set.
                                </p>
                            </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/peopleManager.png")} alt="Manager Icon"></img>
                            <div className={styles.aboutItemText}>
                                <h3>People Manager</h3>
                                <p>
                                    More than 10 years managing winning teams in both the Optical and Retail industries.   
                                </p>
                            </div>
                    </li>                        
                </ul>
            </div>
        </section>
    )
}