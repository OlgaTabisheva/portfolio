import cls from "./Info.module.scss";
import { useTranslation } from "react-i18next";
import photo from './../../images/Gemini_Generated_Image_11p5mt11p5mt11p5.jpeg'

function Info() {
  const { t } = useTranslation();
  return (
    <section className={cls.info}>
      {/* <h2>{t("Hi all")}</h2> */}
      <div className={cls.info__box}>
        <div className={cls.info__boxText}>
        <p className={cls.info__par}>{t("paragraph 1")}</p>
        <p className={cls.info__par}>{t("paragraph 2")}</p>
        </div>
        <img className={cls.info__img} alt='cat' src={photo}/>
        </div>
        <p className={cls.info__par}>{t("paragraph 3")}</p>
        <p className={cls.info__par}>{t("paragraph 4")}</p>
        <p className={cls.info__par}>{t("paragraph 4.1")}</p>
{/*        // <p className={cls.info__par}>{t("paragraph 4.2")}</p>
 */}    </section>
  );
}

export default Info;
