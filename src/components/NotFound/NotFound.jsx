import sad from "../../images/Sad.svg";
import {useTranslation} from "react-i18next";

function NotFound() {
  const { t } = useTranslation()
  return (
    <section>
      <div className='not-found'>
        <h2 className='not-found__title'>{t('404')}</h2>
        <p className='not-found__text'>{t('404text')}</p>
        <img width="200px"
             src={sad} alt="sad"/>
      </div>

    </section>
  )
}

export default NotFound