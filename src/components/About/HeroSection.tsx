import { useTranslation } from "react-i18next";
import "./HeroSection.scss";

const HeroSection = () => {
    const { t } = useTranslation();
  return (
    <div className="about__hero-section">
        <section className="about__hero-content">
            <h1>{t("about-hero.title")}</h1>
        </section>
    </div>
  )
}

export default HeroSection