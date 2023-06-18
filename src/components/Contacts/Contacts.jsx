import cls from "./../Projects/Project.module.scss";
import cont from './Contacts.module.scss'

function Contacts() {
  return (
    <section className={cls.project}>
      <div className={cls.project__block}>
        <h2 className={cls.project__title}>Мои контакты:</h2>
        <ol className={cont.project__list}>
          <li><a href='https://github.com/OlgaTabisheva'>Гитхаб</a></li>
          <li><a href='https://www.linkedin.com/in/olga-tabisheva-67541b258/'>linkedin</a></li>
          <li className={cont.text}>  Почта: oliatabisheva@gmail.com</li>
          <li className={cont.text} > Телеграмм: https://t.me/oliatab</li>
        </ol>

      </div>
    </section>
  )
}

export default Contacts