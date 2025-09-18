import "./HeroSection.scss";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className='hero'>
        <div className="hero-content container">
            <img src="/images/brand-logo.png" alt="Şirket logosu" />
            <h1>{t("hero.title")}</h1>
        </div>
    </div>
  )
}

export default HeroSection;
