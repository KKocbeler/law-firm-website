import { useTranslation } from "react-i18next";
import "./AboutUs.scss";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="about-us container">
      <h2>{t("about.title")}</h2>
      <p>{t("about.text")}</p>
    </section>
  );
};

export default AboutUs;
