import cls from "./Skills.module.scss";
import css from "./../../images/css.svg";
import html from "./../../images/html.svg";
import firebase from "./../../images/logo-firebase.svg";
import ts from "./../../images/typescript_4e5s58kbsfit.svg";
import js from "./../../images/javascript.svg";
import react from "./../../images/react.svg";
import redux from "./../../images/redux.svg";
import hasura from "./../../images/github.svg";
import bib from "./../../images/seo-social.png";
import git from "./../../images/git.svg";
import docker from "./../../images/docker.svg";
import node from "./../../images/node.svg";
import figma from "./../../images/figma.svg";
import kanban from "./../../images/task.svg";
import next from "./../../images/nextjs-icon-svgrepo-com.svg";

import res from "./../../images/responsive_design_8rugpdgjj8fu.svg";

function Skills() {
  return (
    <section className={cls.skills}>
      <ol className={cls.skills__block}>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={css} id="css" alt='css' />
            CSS/SCSS/Tailwind
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={html} id="html" alt='html'/>
            HTML
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={res} id="res" alt='res'/>
            Responsive design

          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={js} id="js" alt='js'/>
            Javascript
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={ts} id="ts" alt='ts'/>
            Typescript
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={react} id="react" alt='react'/>
            React
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={next} id="next" alt='next'/>
            Next.js
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={redux} id="redux" alt='redux'/>
            Redux/Redux Toolkit
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={bib} id="bib" alt='bib'/>
            Library of ready-made UI components: MUI, Bootstrap, etc
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={hasura} id="hasura" alt='hasura'/>
            Hasura/nHost
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={firebase} id="firebase" alt='firebase'/>
            Firebase
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={node} id="node" alt='node'/>
            Node.js
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={docker} id="docker" alt='docker'/>
            Docker
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={git} id="git" alt='git'/>
            Git
          </div>
        </li>
        {/* <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={axios} id='axios'/>Axios</div></li> */}
        {/*           <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={task} id='task'/>{t('task tracker')}</div></li>
         */}{" "}
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={figma} id="figma" alt='figma'/>
            Figma
          </div>
        </li>
        <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={kanban} id="kanban" alt='kanban'/>
            Other: <br/>different task tracking systems, Trello, Notion, Bitrix24, ect; <br/>code editors, VS code, Webstorm.
          </div>
        </li>
        {/*      <li className={cls.skills__text}>
          <div className={cls.skills__box}>
            <img className={cls.skills__img} src={skills} id="skills" />
            task trackers
          </div>
        </li> */}
      </ol>
    </section>
  );
}

export default Skills;
