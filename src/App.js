import './App.css';
import Main from "./components/Main/Main";
import {Link, Route, Routes} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";
import Info from "./components/Info/Info";
import {Menu, MenuItem, Sidebar, useProSidebar} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import InfoIcon from "@mui/icons-material/Info";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import Skills from "./components/Skills/Skills";

function App() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="App">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
          <Menu>
            <MenuItem
              component={<Link to="/" className="link" />}
              className="menu1"
              icon={
                <MenuRoundedIcon
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }>
              <h2>Главная</h2>
            </MenuItem>
            <MenuItem icon={<InfoIcon/>}
                      component={<Link to="/info" className="link" />}
            >Информация
            </MenuItem>
            <MenuItem icon={<EngineeringIcon />}
                      component={<Link to="/skills" className="link" />}
            >
              Навыки </MenuItem>
            <MenuItem icon={<WorkIcon />}
                      component={<Link to="/projects" className="link" />}
            >Проекты </MenuItem>
            <MenuItem icon={<ContactsIcon />}
                      component={<Link to="/contacts" className="link" />}
            >Контакты</MenuItem>
          </Menu>
        </Sidebar>

      <Routes>
        <Route path="/info" element={<Info/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
          <Route path="/" element={<Main/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
