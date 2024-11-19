import cls from "./Skills.module.scss";
import css from './../../images/css.svg'
import html from './../../images/html.svg'
import js from './../../images/javascript.svg'
import react from './../../images/react.svg'
import redux from './../../images/redux.svg'
import axios from './../../images/axios.svg'
import bib from './../../images/seo-social.png'
import git from './../../images/git.svg'
import task from './../../images/task.svg'
import docker from './../../images/docker.svg'
import node from './../../images/node.svg'
import figma from './../../images/figma.svg'
import kanban from './../../images/kanban.svg'
import skills from './../../images/skills_5gavycb1qcik.svg'
import {useTranslation} from "react-i18next";

function Skills() {
  const { t } = useTranslation()
  return (
    <section className={cls.skills}>
      {/* <h2 className={cls.skills__title}>{t('skills')}</h2> */}
        <ol className={cls.skills__block}>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={css} id='css'/>CSS (SCSS, Tailwind)</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={html} id='html'/>HTML</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={js} id='js'/>JavaScript(Typescript)</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={react} id='react'/>React</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={redux} id='redux'/>Redux (Redux Toolkit, React Redux)</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={axios} id='axios'/>Axios</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={bib} id='bib'/>{t('libraries')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={git} id='git'/>{t('git')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={task} id='task'/>{t('task tracker')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={docker} id='docker'/>{t('Docker')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={node} id='node'/>{t('Node')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={figma} id='figma'/>{t('figma')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={kanban} id='kanban'/>{t('kanban')}</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={skills} id='skills'/>Hasura(nHost),Firebase</div></li>

        </ol>
    </section>
  )
}

export default Skills