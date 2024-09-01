import React from "react";
import style from '../css_modules/project.module.css';
import { NavLink, useNavigate } from "react-router-dom";

const Project = ({project}) => {
    // const navigate = useNavigate();

    // const clickHandler = (e) => {
    //     e.preventDefault();
    //     navigate(`/projects/${project.id}`);   
    // }

    // const keyDownHandler = (e) => {
    //     if (e.key === 'enter') {
    //         clickHandler(e);
    //     }
    // }

    return (
        <li
            className={style.project}
            // onClick={clickHandler}
            // onKeyDown={keyDownHandler}
            tabIndex={0} // Makes the element focusable
            role="button" // Helps screen readers understand that this is a clickable element
        >
            <NavLink to={`/projects/${project.id}`}>
                <img
                    src={project.img}
                    alt={project.title}
                    className={style.project__img}
                />
                <h3 className={style.project__title}>{project.title}</h3>
            </NavLink>
        </li>
    )
};

export default Project;
