import cls from "./Skills.module.scss";
import css from './../../images/css.svg'
import html from './../../images/html.svg'
import js from './../../images/javascript.svg'
import react from './../../images/react.svg'
import redux from './../../images/redux.svg'



function Skills() {
  return (
    <section className={cls.skills}>
      <h2 className={cls.skills__title}>Мои навыки:</h2>
        <ol className={cls.skills__block}>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={css} id='css'/>CSS (SCSS, Tailwind)</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={html} id='html'/>HTML</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={js} id='js'/>JavaScript</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={react} id='react'/>React</div></li>
          <li className={cls.skills__text}><div className={cls.skills__box}><img className={cls.skills__img} src={redux} id='redux'/>Redux (Redux Toolkit, React Redux)</div></li>
          <li className={cls.skills__text}>Axios</li>
          <li className={cls.skills__text}>Библиотеки готовых компонентов (mui, bootstrap)</li>
          <li className={cls.skills__text}>Система контроля версий Git (GitHub)</li>
          <li className={cls.skills__text}>Трекер задач (Битрикс24)</li>
          <li className={cls.skills__text}>Docker (развертывание проекта по инструкции)</li>
          <li className={cls.skills__text}>Node.js (только учебный опыт)</li>
          <li className={cls.skills__text}>Графический редактор figma (верстка по готовому макету)</li>
          <li className={cls.skills__text}>Канбан доски и пр. (взаимодействие в trello, notion)</li>
        </ol>
    </section>
  )
}

export default Skills