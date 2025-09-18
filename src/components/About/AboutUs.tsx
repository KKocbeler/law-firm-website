import { useTranslation } from "react-i18next";
import "./AboutUs.scss";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us container">
      <h2>{t("about.title")}</h2>
      <p>{t("about.text")}</p>
    </div>
  );
};

export default AboutUs;
