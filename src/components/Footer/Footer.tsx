import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

const flags = [
    {country: "Türkiye", path:"/images/countries/flag_of_turkey.svg.webp"},
    {country: "Kanada", path:"/images/countries/flag_of_canada.svg.png"},
    {country: "Güney Kıbrıs", path:"/images/countries/flag_of_cyprus.svg.png"},
    {country: "Gürcistan", path:"/images/countries/flag_of_georgia.svg.webp"},
    {country: "Moldova", path:"/images/countries/flag_of_moldova.svg.png"},
    {country: "Kuzey Kıbrıs Türk Cumhuriyeti", path:"/images/countries/flag_of_the_turkish_republic_of_northern_cyprus.svg.png"},
    {country: "Arap Emirlikleri", path:"/images/countries/flag_of_the_united_arab_emirates.svg.webp"},
    {country: "Amerika Birleşik Devletleri", path:"/images/countries/flag_of_the_united_states.svg.webp"},
    {country: "Rusya", path:"/images/countries/flag_of_russia.svg.webp"},
];

const mail = "ayderhukuk@gmail.com";
const phone = "(0532) 179 71 55";

const Footer = () => {
    const { t } = useTranslation();
    const services = t("footer.services", { returnObjects: true }) as string[];

    return (
        <footer>
            <div className="footer-container container">
                <div className="f-left">
                    <div className="brand-logo">
                        <img src="/images/brand-logo.png" alt="Şirket logosu" />
                    </div>
                    <p>{t("footer.slogan")}</p>
                    <p>{t("footer.motto")}</p>
                </div>
                <div className="f-services">
                    <h3>{t("footer.servicesTitle")}</h3>
                    <ul className="services-list">
                        {services.map((service: string, index: number) => (
                            <li key={index} className="services-list__item">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="f-contacts">
                    <h3>{t("footer.contactTitle")}</h3>
                    <p>
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`E-posta gönder: ${mail}`}
                        >
                            {mail}
                        </a>
                    </p>

                    <p>
                        <a
                            href="tel:+905321797155"
                            aria-label={`Ara: ${phone}`}
                        >
                            {phone}
                        </a>
                    </p>
                </div>
                <div className="f-ataturk">
                    <img src="/images/ataturk.png" alt="Atatürk" />
                </div>
                <div className='f-flags'>
                    {flags.map(flag => (
                        <img key={flag.country} src={flag.path} alt={`${flag.country} bayrağı`} title={flag.country}/>
                    ))}
                </div>
            </div>
            <div className="footer-bottom container">
                <p>{t("footer.copyright")}</p>
                <div className="privacy-terms">
                    <Link to={"/terms-and-privacy"}>{t("footer.privacy")}</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
