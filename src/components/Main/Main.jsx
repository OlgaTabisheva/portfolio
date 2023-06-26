import Info from "../Info/Info";
import Contacts from "../Contacts/Contacts";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

function Main() {
  return (

 <nav>
 <a href="#page-one"><Info/></a>|
 <a href="#page-two"><Skills/></a>|
 <a href="#page-three"><Projects/></a>|
 <a href="#page-four"><Contacts/></a>|
</nav>
  )
}

export default Main