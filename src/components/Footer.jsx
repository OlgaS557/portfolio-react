import React from "react";
import './../index.css';
import style from '../css_modules/footer.module.css';
import vk from '../assets/icons/vk.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';
import gitHub from '../assets/icons/gitHub.svg';
import linkedIn from '../assets/icons/linkedIn.svg';
import whatsapp from '../assets/icons/whatsapp1.svg';


const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className="container">
            <div className={style.footer__wrapper}>
                <ul className={style.social}>
                    <li className={style.social__item}>
                        <a href="https://www.linkedin.com/in/olga-solopova/"><img src={linkedIn} alt="LinkedIn"/></a>
                    </li>                    
                    <li className={style.social__item}>
                        <a href="https://wa.me/+975543921204"><img src={whatsapp} alt="Whatsapp"/></a>
                    </li>
                    {/* <li className={style.social__item}>
                        <a href="#!"><img src={vk} alt="Link" /></a>
                    </li>
                    <li className={style.social__item}>
                        <a href="#!"><img src={instagram} alt="Link" /></a>
                    </li>
                    <li className={style.social__item}>
                        <a href="#!"><img src={twitter} alt="Link"/></a>
                    </li> */}                    
                    {/* <li className={style.social__item}>
                        <a href="#!"><img src={gitHub} alt="GitHub"/></a>
                    </li> */}
                </ul>
                {/* <div className={style.copyright}>
                    <p>© 2022 frontend-dev.com</p>
                </div> */}
            </div>    
        </div>
    </footer>
  )
};

export default Footer;
