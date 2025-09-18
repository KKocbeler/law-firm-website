import { useTranslation } from "react-i18next";
import "./PrivacyPage.scss";

const PrivacyPage = () => {
  const { t } = useTranslation();
  const sections = t("privacy.sections", { returnObjects: true }) as {
    title: string;
    content: string;
  }[];

  return (
    <div className="privacy container">
      <div className="privacy-container">
        <h1>{t("privacy.title")}</h1>
        {sections.map((section, index) => (
            <section key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPage;
