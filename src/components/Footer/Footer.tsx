import { Link } from "react-router-dom";
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


const services = [
  "Danışmanlık Hizmetleri",
  "Dava ve Uyuşmazlık Çözümleri",
  "Sözleşme ve Ticari İşlemler",
  "Aile ve Miras Hukuku",
];

const mail = "ayderhukuk@gmail.com";
const phone = "(0532) 179 71 55";
const Footer = () => {
  return (
    <footer>
        <div className="footer-container container">
            <div className="f-left">
                <div className="brand-logo">
                    <img src="/images/brand-logo.png" alt="Şirket logosu" />
                </div>
                <p>Hukuki Çözümlere Giden Köprünüz.</p>
                <p>Güven, Tecrübe, Sonuç</p>
                {/* <div className="footer-media">
                    <ul className="footer-media__list">
                        {
                            socialLinks.map(social => (
                                <li className="footer-media__item" key={social.label}>
                                    <a href={social.path} title={social.label}>{social.icon}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div> */}
            </div>
            <div className="f-services">
                <h3>Hizmet Alanlarımız</h3>
                <ul className="services-list">
                    {services.map((service, index) => (
                    <li key={index} className="services-list__item">
                        {service}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="f-contacts">
                <h3>İletişim</h3>
                <p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ayderhukuk@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="E-posta gönder: ayderhukuk@gmail.com"
                    >
                        {mail}
                    </a>
                </p>

                <p>
                    <a
                        href="tel:+905321797155"
                        aria-label="Ara: 0532 179 71 55"
                    >
                        {phone}
                    </a>
                </p>
            </div>
            <div className="f-ataturk">
                <img src="/images/ataturk.png" alt="Atatürk" />
            </div>
            <div className='f-flags'>
                {
                    flags.map(flag => (
                        <img src={flag.path} alt={`${flag.country} bayrağı`} title={flag.country}/>
                    ))
                }
            </div>
        </div>
        <div className="footer-bottom container">
            <p>@ 2025 Ayerden Demirhan Hukuk Bürosu - Tüm hakları saklıdır </p>
            <div className="privacy-terms">
                <Link to={"/terms-and-privacy"}>Kullanım ve Gizlilik</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer