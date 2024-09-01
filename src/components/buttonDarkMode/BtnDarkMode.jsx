import React, { useEffect } from "react";
import classNames from "classnames";
import {useLocalStorage} from '../../hook/useLocalStorage';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import style from '../../css_modules/btnDarkMode.module.css'
import detectDarkMode from "../../utils/detectDarkMode";

const BtnDarkMode = () => {
  //При старте определяем системные настройки темной/светлой темы (detectDarkMode()) и выставляем эту тему на странице(из localStorage)
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if(darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  //Если автоматически меняются системные настройки темы, меняем тему в апликации
  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorSchem = event.matches ? 'dark' : 'light';
        setDarkMode(newColorSchem);
      });
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => currentValue === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      className={classNames(style.dark_mode_btn, {[style.dark_mode_btn__active]: darkMode === 'dark'})}
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <img src={sun} alt="Light mode" className={style.dark_mode_btn__icon} />
      <img src={moon} alt="Dark mode" className={style.dark_mode_btn__icon} />
    </button>
  )
};

export default BtnDarkMode;
