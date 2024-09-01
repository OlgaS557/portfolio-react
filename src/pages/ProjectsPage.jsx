import React from "react";
import style from '../css_modules/projectsPage.module.css';
import {projects} from '../utils/data';
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title_1">Projects</h2>
            <ul className={style.projects}>
                {projects.map((item) => (<Project project={item} key={item.id} />))}                
            </ul>
        </div>
    </main>
  )
};

export default ProjectsPage;
