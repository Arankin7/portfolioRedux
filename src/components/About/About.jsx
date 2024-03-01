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
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"></img>
                            <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non, eligendi ea voluptatum, est eaque nam quis illo unde id possimus quasi modi voluptatibus quos.
                                </p>
                            </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"></img>
                            <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non, eligendi ea voluptatum, est eaque nam quis illo unde id possimus quasi modi voluptatibus quos.
                                </p>
                            </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon"></img>
                            <div className={styles.aboutItemText}>
                                <h3>Game Developer</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non, eligendi ea voluptatum, est eaque nam quis illo unde id possimus quasi modi voluptatibus quos.
                                </p>
                            </div>
                    </li>                        
                </ul>
            </div>
        </section>
    )
}