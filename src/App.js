import style from "./App.module.scss";
import "./burger.css";

import { slide as Menu } from "react-burger-menu";
import red from "./images/menu_burger.svg";
import Info from "./components/Info/Info";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import cls from "./components/Skills/Skills.module.scss";
import home from "./images/home.svg";
import skills from "./images/computer.svg";
import education from "./images/skills_5gavycb1qcik.svg";
import flagRu from "./images/russia_144dij0xz4cy.svg";
import flagEn from "./images/united_states_6wn5hj71yyi5.svg";

import work from "./images/work.svg";
import cnt from "./images/contact.svg";
import { useTranslation } from "react-i18next";
import Education from "./components/Education/Education";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const getUserLanguage =
    window.navigator.userLanguage || window.navigator.language;
  const [useLanguage, setUseLanguage] = useState("");

  function changeUserLanguage() {
    if (useLanguage.toLowerCase().includes("en")) {
      setUseLanguage("ru");
      i18n.changeLanguage("ru");
    } else if (useLanguage.toLowerCase().includes("ru")) {
      setUseLanguage("en");
      i18n.changeLanguage("en");
    }
  }
  useEffect(() => {
    i18n.changeLanguage(getUserLanguage);
  }, []);
  
  useEffect(() => {
    setUseLanguage(getUserLanguage);
  }, [getUserLanguage]);

  return (
    <div className={style.app}>
      <div id="outer-container" className={style.app__outerContainer}>
        <div className={style.app__buttonFlagsCover}>
          <button
            className={style.app__buttonFlags}
            onClick={() => changeUserLanguage()}
          >
            <img
              className={style.app__imgFlags}
              alt="flag"
              src={useLanguage === "ru" ? flagRu : flagEn}
            />
          </button>
        </div>
        <div className={style.app__menuBox}>
          <Menu
            customBurgerIcon={
              <img src={red} alt="img" className={style.app__menuImg} />
            }
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            <a className={style.app__menuItem} href="#info">
              <div className={cls.skills__box}>
                <img
                  className={cls.skills__img}
                  src={home}
                  id="home"
                  alt="home"
                />
                {t("Main")}
              </div>
            </a>
            <a className={style.app__menuItem} href="#projects">
              <div className={cls.skills__box}>
                <img
                  className={cls.skills__img}
                  src={work}
                  id="work"
                  alt="work"
                />
                {t("Projects")}
              </div>
            </a>
            <a className={style.app__menuItem} href="#skills">
              <div className={cls.skills__box}>
                <img
                  className={cls.skills__img}
                  src={skills}
                  id="skills2"
                  alt="skills1"
                />
                {t("Skills")}
              </div>
            </a>

            <a className={style.app__menuItem} href="#education">
              <div className={cls.skills__box}>
                <img
                  className={cls.skills__img}
                  src={education}
                  id="Education"
                  alt="education"
                />
                {t("Education")}
              </div>
            </a>
            <a className={style.app__menuItem} href="#contact">
              <div className={cls.skills__box}>
                <img className={cls.skills__img} src={cnt} id="cnt" alt="cnt" />
                {t("Contacts")}
              </div>
            </a>
          </Menu>
        </div>
        <nav className={style.app__nav}>
          {/*        <select
            className={style.app__menuButtons}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option className={style.app__menuButton} value="ru">
              Choose language/Russian
            </option>

            <option className={style.app__menuButton} value="en">
              Choose language/English
            </option>
          </select> */}

          <div className={style.app__menuItemBox} id="info">
            <p className={style.app__menuItemLink}>{t("Hi all")}</p>
            <Info />
          </div>
          <div className={style.app__menuItemBox} id="projects">
            <p className={style.app__menuItemLink}>
              {t("project-non-educational")}
            </p>
            <Projects />
          </div>
          <div className={style.app__menuItemBox} id="skills">
            <p className={style.app__menuItemLink}>{t("Skills")}:</p>
            <Skills />
          </div>

          <div className={style.app__menuItemBox} id="education">
            <p className={style.app__menuItemLink}>{t("MyEducation")}:</p>
            <Education />
          </div>
          <div className={style.app__menuItemBox} id="contact">
            <p className={style.app__menuItemLink}>{t("contacts")}</p>{" "}
            <Contacts />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
