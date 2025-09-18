import './CaseTypes.scss';
import { useTranslation } from 'react-i18next';

const practiceAreas = [
  { key: "family", image: "/images/justice-types/aile-hukuk.png" },
  { key: "commerce", image: "/images/justice-types/ticaret-hukuk.png" },
  { key: "criminal", image: "/images/justice-types/ceza-hukuk.png" },
  { key: "work", image: "/images/justice-types/is-hukuk.png" },
  { key: "bankruptcy", image: "/images/justice-types/icra-hukuk.png" },
  { key: "realEstate", image: "/images/justice-types/gayrimenkul-hukuk.png" },
  { key: "tax", image: "/images/justice-types/vergi-hukuk.png" },
  { key: "ip", image: "/images/justice-types/dusunce-hukuk.png" },
];

const CaseTypes = () => {
  const { t } = useTranslation();

  return (
    <section className='case-types container'>
        <h2>{t("caseTypes.title")}</h2>
        <article className='practice-areas'>
            {practiceAreas.map((item, index) => (
                <section className='area-section' key={index}>
                    <img src={item.image} alt={t(`caseTypes.areas.${item.key}`)} />
                    <h3>{t(`caseTypes.areas.${item.key}`)}</h3>
                </section>
            ))}
        </article>
    </section>
  )
}

export default CaseTypes;
