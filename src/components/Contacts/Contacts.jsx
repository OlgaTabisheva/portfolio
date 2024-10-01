import cls from "./../Projects/Project.module.scss";
import cont from './Contacts.module.scss'
import {useTranslation} from "react-i18next";
import git from "../../images/github.svg";
import mail from "../../images/mail.svg";
import tg from "../../images/telegram.svg";
import ln from "../../images/linkedin.svg";

function Contacts() {
  const { t } = useTranslation()
  return (
    <section className={cont.contacts}>
      <h2 className={cont.contacts__title}>{t('contacts')}</h2>
      <ol className={cont.contacts__block}>
        <li><a className={cont.contacts__text_hover} href='mailto:oliatabisheva@gmail.com'><img className={cont.contacts__img} src={mail} id='mail'/>{t('contact')}
           oliatabisheva@gmail.com</a></li>
        <li><a className={cont.contacts__text_hover} href='https://t.me/oliatab'><img className={cont.contacts__img} src={tg} id='tg'/>Telegtam: https://t.me/oliatab</a></li>
        <li><a className={cont.contacts__text_hover} href='https://github.com/OlgaTabisheva'><img className={cont.contacts__img} src={git} id='git'/>Github: https://github.com/OlgaTabisheva</a></li>
        <li><a className={cont.contacts__text_hover}
               href='https://www.linkedin.com/in/olga-tabisheva-67541b258/'><img className={cont.contacts__img} src={ln} id='ln'/>linkedin: https://www.linkedin.com/in/olga-tabisheva-67541b258/</a></li>
      </ol>
    </section>
  )
}

export default Contacts