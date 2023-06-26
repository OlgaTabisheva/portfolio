import './App.css';
import Main from "./components/Main/Main";
import { push as Menu  } from 'react-burger-menu';
import red from './images/menu_burger.svg';
import Info from "./components/Info/Info";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";


function App() {
  function showSettings(event){
    event.preventDefault()
  }
  return (
    <div className="App">
      <div id="outer-container">
        <Menu  customBurgerIcon={ <img src={red} /> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <a  className="menu-item" href="#home">Main</a>
          <a  className="menu-item" href="#about">Skills</a>
          <a  className="menu-item" href="/#projects">Projects</a>
          <a  className="menu-item" href="#contact">Contact</a>
        </Menu>
        <nav className='nav'>
          <a id="home" href="/"><Info/></a>
          <a id="about" href="/about"><Skills/></a>
          <a id="projects" href="/projects"><Projects/></a>
          <a id="contact" href="/contact"><Contacts/></a>
        </nav>
      </div>
    </div>
  );
}

export default App;
