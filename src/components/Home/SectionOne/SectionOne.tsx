import { CiCircleCheck } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { useTranslation, Trans } from "react-i18next";
import "./SectionOne.scss";

const SectionOne = () => {
  const { t } = useTranslation();

  const features = t("section-one.features", { returnObjects: true }) as string[];
  const experienceYears = t("section-one.experienceYears");
  const experienceText = t("section-one.experienceText");

  return (
    <div className="section-one container">
      <div className="image-section">
        <img src="/images/themis.png" alt="themis image" loading="lazy" />
        <div className="badge">
          <span>{experienceYears}</span>
          <p>{experienceText}</p>
        </div>
      </div>
      <div className="content-section">
        <GoLaw />
        <p className="title">
          <Trans i18nKey="section-one.title" components={{ b: <b /> }} />
        </p>
        <p className="paragraph">{t("section-one.paragraph")}</p>
        <section className="features">
          <ul className="features__list">
            {features.map((feature, index) => (
              <li className="features__list-item" key={index}>
                <CiCircleCheck /> {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SectionOne;
