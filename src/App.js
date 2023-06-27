import './App.css';
import { push as Menu  } from 'react-burger-menu';
import red from './images/menu_burger.svg';
import Info from "./components/Info/Info";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import cls from "./components/Skills/Skills.module.scss";
import home from "./images/home.svg";
import skills from "./images/computer.svg";
import work from "./images/work.svg";
import cnt from "./images/contact.svg";

function App() {

  return (
    <div className="App">
      <div id="outer-container">
        <Menu  customBurgerIcon={ <img src={red} /> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <a  className="menu-item" href="#top"><div className={cls.skills__box}><img className={cls.skills__img} src={home} id='home'/>Главная</div></a>
          <a  className="menu-item" href="#about"><div className={cls.skills__box}><img className={cls.skills__img} src={skills} id='skills'/>Навыки</div></a>
          <a  className="menu-item" href="#projects"><div className={cls.skills__box}><img className={cls.skills__img} src={work} id='work'/>Проекты</div></a>
          <a  className="menu-item" href="#contact"><div className={cls.skills__box}><img className={cls.skills__img} src={cnt} id='cnt'/>Контакты</div></a>
        </Menu>
        <nav className='nav'>
          <a id="top" ><Info/></a>
          <a id="about" ><Skills/></a>
          <a id="projects" ><Projects/></a>
          <a id="contact" ><Contacts/></a>
        </nav>
      </div>
    </div>
  );
}

export default App;
