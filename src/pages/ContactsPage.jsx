import React from "react";
import style from '../css_modules/contentList.module.css';

const ContactsPage = () => {
  return (
    <main className="section">
        <div className="container">           
                <h1 className="title_1">Contacts</h1>
                <ul className={style.content_list}>
                    <li className={style.content_list__item}>
                        <h2 className="title_2">Location</h2>
                        <p>Rehovot, Israel</p>
                    </li>
                    <li className={style.content_list__item}>
                        <h2 className="title_2">Phone</h2>
                        <p><a href="tel:+975543921204">+(975) 54-392-1204</a></p>
                    </li>
                    <li className={style.content_list__item}>
                        <h2 className="title_2">Email</h2>
                        <p><a href="mailto:olga.solopova21@gmail.com">olga.solopova21@gmail.com</a></p>
                    </li>
                </ul>                                                      
        </div>
    </main>
  )
};

export default ContactsPage;

//https://wa.me/+975543921204 -- whatsapp