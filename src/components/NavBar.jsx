import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import BtnDarkMode from '../components/buttonDarkMode/BtnDarkMode';
import style from '../css_modules/navbar.module.css';

const NavBar = () => {
  return (
    <nav className={style.nav}>
        <div className="container">
            <div className={style.nav_row}>
                <NavLink to="/" className={style.logo}><strong>Freelancer</strong> portfolio</NavLink>
                
                <BtnDarkMode />
                
                <ul className={style.nav_list}>
                    <li className={style.nav_list__item}>
                        <NavLink to="/" 
                            className={({ isActive }) =>
                            `${style.nav_list__link} ${isActive ? style['nav_list__link--active'] : ''}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={style.nav_list__item}>
                        <Link 
                            to="skills-section" 
                            smooth={true} 
                            duration={500} 
                            className={style.nav_list__link}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className={style.nav_list__item}>
                        <NavLink to="/projects" 
                            className={({ isActive }) =>
                                `${style.nav_list__link} ${isActive ? style['nav_list__link--active'] : ''}`
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className={style.nav_list__item}>
                        <NavLink to="/contacts" 
                            className={({ isActive }) =>
                                `${style.nav_list__link} ${isActive ? style['nav_list__link--active'] : ''}`
                            }
                        >
                            Contacts
                        </NavLink>
                    </li>
                    {/* <li className={style.nav_list__item}><a href="./contacts.html" className={style.nav_list__link}>Contacts</a></li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
};

export default NavBar;
