import cls from './Project.module.scss'
import {useTranslation} from "react-i18next";

function Projects() {
  const { t } = useTranslation()
  return (
    <section className={cls.project}>
      <div className={cls.project__block}>
        <h2 className={cls.project__title}>{t('project-non-educational')}</h2>
        <ol className={cls.project__list}>
          <li><a href='https://user-browser.746746746.xyz/profile'>{t('project1')}</a></li>
          <li><a href='https://demoshop.746746746.xyz/'>{t('project2')}</a></li>

        </ol>
      </div>
      <div className={cls.project__block}>
        <h2 className={cls.project__title}>{t('project-study')}</h2>
        <ol className={cls.project__list}>
          <li><a href='https://olgatabisheva.github.io/how-to-learn/'>{t('projectF')}</a></li>
          <li><a href='https://olgatabisheva.github.io/russian-travel/'>{t('projectS')}</a></li>
          <li><a href='https://olgatabisheva.github.io/mesto-react/'>{t('projectT')}</a></li>
        </ol>
      </div>
    </section>
  )
}

export default Projects