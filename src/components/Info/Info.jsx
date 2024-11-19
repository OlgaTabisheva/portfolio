import cls from "./Info.module.scss";
import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();
  return (
    <section className={cls.info}>
      {/* <h2>{t("Hi all")}</h2> */}
        <p className={cls.info__par}>{t("paragraph 1")}</p>
        <p className={cls.info__par}>{t("paragraph 2")}</p>
        <p className={cls.info__par}>{t("paragraph 3")}</p>
        <p className={cls.info__par}>{t("paragraph 4")}</p>
        <p className={cls.info__par}>{t("paragraph 4.1")}</p>
        <p className={cls.info__par}>{t("paragraph 4.2")}</p>
    </section>
  );
}

export default Info;
