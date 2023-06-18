import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import cls from "./SideBar.module.scss"
function SideBar() {
  return (
    <div className='cls.sideBar'>

      <Sidebar collapsed collapsedWidth="60px" className={cls.sideBar}>
        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/"/>}> Главная</MenuItem>
          <MenuItem component={<Link to="/projects"/>}> Проекты</MenuItem>
          <MenuItem component={<Link to="/contacts"/>}> Контакты</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;