import cls from './Info.module.scss'
import {useTranslation} from "react-i18next";

function Info() {
  const { t } = useTranslation()
  return (
    <section className={cls.info}>
      <h2>{t('Hi all')}</h2>
      <div>
        <p>{t('paragraph 1')}</p>
        <p>{t('paragraph 2')}</p>
        <p>{t('paragraph 3')}</p>
        <p>{t('paragraph 4')}</p>
      </div>


    </section>
  )
}

export default Info