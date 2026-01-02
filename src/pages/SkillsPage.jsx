import React from "react";
import style from '../css_modules/contentList.module.css';

const SkillsPage = () => {
  return (
    <main className="section">
        <div className="container">           
                <h1 className="title_1">Skills</h1>
                <ul className={style.content_list}>
                    <li className={style.content_list__item}>
                        <h2 className="title_2">Frontend</h2>
                        <p>HTML5, CSS3, SCSS, Bootstrap, MaterialUI, Tailwind, JavaScript, TypeScript,
                           ReactJS, NextJS, Zustand, React-query, Redux Toolkit        
                        </p>
                    </li>
                    <li className={style.content_list__item}>
                        <h2 className="title_2">Backend</h2>
                        <p>MySQL, MongoDB, Java, NestJS, NodeJS Express
                        </p>
                    </li>
                </ul>                                                      
        </div>
    </main>
  )
};

export default SkillsPage;
