import React from "react";
import style from '../css_modules/header.module.css';

const Header = () => {
  return (
    <header className={style.header}>    
        <div className={style.header__wrapper}>
            <h1 className={style.header__title}>
                <strong>Hi, my name is <em>Olga</em></strong><br />
                a frontend developer
            </h1>
            <div className={style.header__text}>
                <p>with passion for learning and creating.</p>
            </div>
            <a href="/CV_OlgaSolopova_Full-StackDeveloper.pdf" className={style.btn}>Download CV</a>
        </div>    
    </header>
  )
};

export default Header;
