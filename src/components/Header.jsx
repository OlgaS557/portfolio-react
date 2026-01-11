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
        <a href={`${import.meta.env.BASE_URL}CV_OlgaSolopova_FullStackDeveloper.pdf`}
          className={style.btn}
          download
        >
          Download CV
        </a>
      </div>
    </header>
  )
};

export default Header;
