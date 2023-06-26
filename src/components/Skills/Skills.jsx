import cls from "./Skills.module.scss";
import cont from "../Contacts/Contacts.module.scss";

function Skills() {
  return (
    <section className={cls.skills}>
      <h2 className={cls.skills__title}>Мои навыки:</h2>
        <ol className={cls.skills__block}>
          <li className={cls.skills__text}>CSS (SCSS, Tailwind)</li>
          <li className={cls.skills__text}>HTML</li>
          <li className={cls.skills__text}>JavaScript</li>
          <li className={cls.skills__text}>React</li>
          <li className={cls.skills__text}>Redux (Redux Toolkit, React Redux)</li>
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