import './App.css';
import { slide as Menu  } from 'react-burger-menu';
import red from './images/menu_burger.svg';
import Info from "./components/Info/Info";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import cls from "./components/Skills/Skills.module.scss";
import home from "./images/home.svg";
import skills from "./images/computer.svg";
import education from "./images/skills_5gavycb1qcik.svg";

import work from "./images/work.svg";
import cnt from "./images/contact.svg";
import { useTranslation } from 'react-i18next';
import Education from './components/Education/Education';

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className="App">
      <div id="outer-container">
        <Menu  customBurgerIcon={ <img src={red} /> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <a  className="menu-item" href="#info"><div className={cls.skills__box}><img className={cls.skills__img} src={home} id='home'/>{t('Main')}</div></a>
          <a  className="menu-item" href="#education"><div className={cls.skills__box}><img className={cls.skills__img} src={education} id='education'/>{t('education')}</div></a>
          <a  className="menu-item" href="#about"><div className={cls.skills__box}><img className={cls.skills__img} src={skills} id='skills'/>{t('Skills')}</div></a>
          <a  className="menu-item" href="#projects"><div className={cls.skills__box}><img className={cls.skills__img} src={work} id='work'/>{t('Projects')}</div></a>
          <a  className="menu-item" href="#contact"><div className={cls.skills__box}><img className={cls.skills__img} src={cnt} id='cnt'/>{t('Contacts')}</div></a>
        </Menu>
        <nav className='nav'>
          <select className="menu-buttons" onChange={(e) => i18n.changeLanguage(e.target.value)}>
            <option className="menu-button">Choose language</option>
            <option className="menu-button" value="ru">Russian</option>
            <option  className="menu-button" value="en">English</option>
          </select>
          <a id="info" ><Info/></a>
          <a id="education" ><Education/></a>
          <a id="about" ><Skills/></a>
          <a id="projects" ><Projects/></a>
          <a id="contact" ><Contacts/></a>
        </nav>
      </div>
    </div>
  );
}

export default App;
