import cls from './Project.module.scss'
function Projects() {
  return (
    <section className={cls.project}>
      <div className={cls.project__block}>
        <h2 className={cls.project__title}>Мои внеучебные проекты:</h2>
        <ol className={cls.project__list}>
          <li><a href='https://user-browser.746746746.xyz/profile'>Проект выполнен в качестве тестового задания, Redux toolkit, axios, css </a></li>
          <li><a href='https://demoshop.746746746.xyz/'>Магазин на fake api. Пет проект, разработка не окончена</a></li>

        </ol>
      </div>
      <div className={cls.project__block}>
        <h2 className={cls.project__title}>Мои учебные проекты:</h2>
        <ol className={cls.project__list}>
          <li><a href='https://olgatabisheva.github.io/how-to-learn/'>Первый проект (научится учится)</a></li>
          <li><a href='https://olgatabisheva.github.io/russian-travel/'>Первый адаптивный проект (путешествие по России)</a></li>
          <li><a href='https://olgatabisheva.github.io/mesto-react/'>Проект место (вариант без бэкэнда)</a></li>



        </ol>
      </div>
    </section>
  )
}

export default Projects