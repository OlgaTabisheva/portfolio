import cls from "./Project.module.scss";
import { useTranslation } from "react-i18next";
import imgCook from "./../../images/Screenshot1.png";
function Projects() {
  const { t } = useTranslation();
  return (
    <section className={cls.project}>
      <div className={cls.project__block}>
        <ol className={cls.project__list}>
          <li className={cls.project__listBox}>
            <div className={cls.project__textBox}>
              <p className={cls.project__text}>{t("project1")}</p>
              <p className={cls.project__text}>{t("project1.1")}</p>
            </div>
            <a
              className={cls.project__linkCover}
              href="https://cook-book.746746746.xyz/recipes"
            >
              <img className={cls.project__img} src={imgCook} alt="cookBook" />
              <p className={cls.project__linkText}>Проект Cook-book.</p>
              <p className={cls.project__linkTextSmall}>
                Готовка станет твоим новым хобби. С нашими пошаговыми рецептами
                и полезными советами даже начинающий кулинар сможет приготовить
                настоящее произведение искусства.
              </p>
            </a>
          </li>
          <li>
            <a
              className={cls.project__link}
              href="https://knot-store.746746746.xyz/"
            >
              <div>
                <p className={cls.project__text}>{t("project3")}</p>
                <p className={cls.project__text}>{t("project3.1")}</p>
              </div>
            </a>
          </li>
          <li>
            <a
              className={cls.project__link}
              href="https://demoshop.746746746.xyz/"
            >
              <p className={cls.project__text}>{t("project2")}</p>
            </a>
          </li>
        </ol>
      </div>
      {/*      <div className={cls.project__block}>
        <h2 className={cls.project__title}>{t('project-study')}</h2>
        <ol className={cls.project__list}>
          <li><a href='https://olgatabisheva.github.io/how-to-learn/'>{t('projectF')}</a></li>
          <li><a href='https://olgatabisheva.github.io/russian-travel/'>{t('projectS')}</a></li>
          <li><a href='https://olgatabisheva.github.io/mesto-react/'>{t('projectT')}</a></li>
        </ol>
      </div> */}
    </section>
  );
}

export default Projects;
