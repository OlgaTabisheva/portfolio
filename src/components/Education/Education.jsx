import cls from './../Info/Info.module.scss'
import {useTranslation} from "react-i18next";

function Education() {
  const { t } = useTranslation()
  return (
    <section className={cls.info}>
      <h2>{t('MyEducation')}</h2>
      <div>
        <p>{t('paragraph 5')}</p>
        <p>{t('paragraph 6')}</p>
        <p>{t('paragraph 7')}</p>
      </div>


    </section>
  )
}

export default Education