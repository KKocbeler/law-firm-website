import { FaEnvelope } from "react-icons/fa6";
import "./ContactPage.scss";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact__hero-section">
        <section>
          <div className="contact__hero-content">
            <h1>{t("contact.heroTitle")}</h1>
          </div>
        </section>
      </div>

      <section className="contact-section container">
        <div className="contact-container">
          <div className="contact-info-wrapper">
            <h2 className="contact-heading">{t("contact.heading")}</h2>
            <p>{t("contact.paragraph1")}</p>
            <br />
            <p>{t("contact.paragraph2")}</p>

            <div className="contact-details">
              <a href="mailto:ayderhukuk@gmail.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p className="contact-item-title">{t("contact.emailTitle")}</p>
                <p className="contact-link">ayderhukuk@gmail.com</p>
              </a>

              <a href="tel:+905321797155" className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <p className="contact-item-title">{t("contact.phoneTitle")}</p>
                <p className="contact-link">0532 179 71 55</p>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Örnek+Mahallesi+Örnek+Sokak+No:123,+Merkez,+Uşak"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaMapMarkerAlt className="contact-icon" />
                <p className="contact-item-title">{t("contact.addressTitle")}</p>
                <p className="contact-address">
                  {t("contact.address")}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
