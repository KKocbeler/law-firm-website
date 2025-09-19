import { useTranslation } from "react-i18next";
import "./HeroSection.scss";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="members__hero-section">
        <section className="members__hero-content">
            <h1>{t("team-hero.title")}</h1>
        </section>
    </div>
  )
}

export default HeroSection;
