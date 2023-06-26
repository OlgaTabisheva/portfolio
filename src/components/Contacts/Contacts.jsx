import cls from "./../Projects/Project.module.scss";
import cont from './Contacts.module.scss'

function Contacts() {
  return (
    <section className={cont.contacts}>
      <h2 className={cont.contacts__title}>Мои контакты:</h2>
      <ol className={cont.contacts__block}>
          <li className={cont.contacts__text}>Почта: oliatabisheva@gmail.com</li>
          <li className={cont.contacts__text}>Телеграмм: https://t.me/oliatab</li>
          <li><a href='https://github.com/OlgaTabisheva'>Гитхаб</a></li>
          <li><a href='https://www.linkedin.com/in/olga-tabisheva-67541b258/'>linkedin</a></li>
      </ol>
    </section>
  )
}

export default Contacts