import cls from "./Project.module.scss";
import { useTranslation } from "react-i18next";
import imgCook from "./../../images/Screenshot1.png";
import imgKnot from "./../../images/Screenshot_20241121_161847.png";
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
              <p className={cls.project__text}>{t("project1.2")}</p>
              <p className={cls.project__text}>{t("project1.3")}</p>
              <ol className={cls.project__listSmall}>
                <li className={cls.project__text}>{t("project1.4")}</li>
                <li className={cls.project__text}>{t("project1.5")}</li>
                <li className={cls.project__text}>{t("project1.6")}</li>
                <li className={cls.project__text}>{t("project1.7")}</li>
                <li className={cls.project__text}>{t("project1.8")}</li>
              </ol>
              <p className={cls.project__text}>{t("project1.9")}</p>
              <ol className={cls.project__listSmall}>
                <li className={cls.project__text}>{t("project1.10")}</li>
                <li className={cls.project__text}>{t("project1.11")}</li>
              </ol>
              <p className={cls.project__text}>{t("project1.12")}</p>
            </div>
            <a
              className={cls.project__linkCover}
              href="https://cook-book.746746746.xyz/recipes"
            >
              <img className={cls.project__img} src={imgCook} alt="cookBook" />
              <div className={cls.project__textBox}>
                <p className={cls.project__linkText}>
                  Cсылка на проект: 'Cook-book'.
                </p>
                <p className={cls.project__linkTextSmall}>
                  Готовка станет твоим новым хобби. С нашими пошаговыми
                  рецептами и полезными советами даже начинающий кулинар сможет
                  приготовить настоящее произведение искусства.
                </p>
              </div>
            </a>
          </li>
          <div className={cls.project__createLine}></div>
          <li className={cls.project__listBox}>
            <a
              className={cls.project__linkCover}
              href="https://knot-store.746746746.xyz/"
            >
              <img className={cls.project__img} src={imgKnot} alt="knotStore" />
              <div className={cls.project__textBox}>
                <p className={cls.project__linkText}>
                  Cсылка на проект: 'Knot-store'.
                </p>
                <p className={cls.project__linkTextSmall}>
                  Здесь, в этом маленьком магазине, каждая вещь – уникальное
                  произведение искусства, созданное вручную с любовью и
                  вниманием к деталям.
                </p>
              </div>
            </a>
            <div className={cls.project__textBox}>
            <div className={cls.project__textBox}>
              <p className={cls.project__text}>{t("project3")}</p>
              <p className={cls.project__text}>{t("project3.1")}</p>
              <p className={cls.project__text}>{t("project3.2")}</p>
              <p className={cls.project__text}>{t("project3.3")}</p>
              <ol className={cls.project__listSmall}>
                <li className={cls.project__text}>{t("project3.4")}</li>
                <li className={cls.project__text}>{t("project3.5")}</li>
                <li className={cls.project__text}>{t("project3.6")}</li>
                <li className={cls.project__text}>{t("project3.7")}</li>
                <li className={cls.project__text}>{t("project3.8")}</li>
                <li className={cls.project__text}>{t("project3.9")}</li>
                <li className={cls.project__text}>{t("project3.10")}</li>
              </ol>
              <p className={cls.project__text}>{t("project3.11")}</p>
              <ol className={cls.project__listSmall}>
                <li className={cls.project__text}>{t("project3.12")}</li>
              </ol>
              <p className={cls.project__text}>{t("project1.12")}</p>
            </div>
            </div>
          </li>
          {/*         <li>
            <a
              className={cls.project__link}
              href="https://demoshop.746746746.xyz/"
            >
              <p className={cls.project__text}>{t("project2")}</p>
            </a>
          </li> */}
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
