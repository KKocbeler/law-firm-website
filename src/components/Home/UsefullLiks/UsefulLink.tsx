import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./UsefulLink.scss";

const links = [
    { labelKey: "links.constitutional_court", path: "images/useful-links/anayasa-mahkemesi.png", url: "https://www.anayasa.gov.tr/" },
    { labelKey: "links.tbmm", path: "images/useful-links/tbmm.png", url: "https://www.tbmm.gov.tr/" },
    { labelKey: "links.turkey_bar_association", path: "images/useful-links/türkiye-barolar-birligi.png", url: "https://www.barobirlik.org.tr/" },
    { labelKey: "links.council_of_state", path: "images/useful-links/danistay.png", url: "https://www.danistay.gov.tr/" },
    { labelKey: "links.supreme_court_of_appeals", path: "images/useful-links/yargitay.png", url: "https://www.yargitay.gov.tr/" },
    { labelKey: "links.interpol", path: "images/useful-links/interpol.webp", url: "https://www.interpol.int/" },
    { labelKey: "links.echr", path: "images/useful-links/european-court-of-human-rights.png", url: "https://www.echr.coe.int/" },
]

const UsefulLink = () => {
  const { t } = useTranslation();

  return (
    <div className="useful-links">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
        }}
      >
        {
          links.map(link => (
            <SwiperSlide key={link.labelKey}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.path} alt={t(link.labelKey)} title={t(link.labelKey)} loading='lazy'/>
                <span>{t(link.labelKey)}</span>
              </a>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default UsefulLink;