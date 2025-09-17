import './CaseTypes.scss';

const practiceAreas = [
  {
    title: "Aile Hukuku",
    subItems: [
      "Boşanma davaları",
      "Velayet ve nafaka",
      "Miras ve vasiyet",
      "Evlat edinme işlemleri"
    ],
    image: "/images/justice-types/aile-hukuk.jpg"
  },
  {
    title: "Ticaret ve Şirket Hukuku",
    subItems: [
      "Şirket sözleşmeleri",
      "Ortaklık ve sermaye davaları",
      "Ticari uyuşmazlıklar",
      "Fesih ve iflas işlemleri"
    ],
    image: "/images/justice-types/sirket-hukuku.jpeg"
  },
  {
    title: "Ceza Hukuku",
    subItems: [
      "Suç ve savunma davaları",
      "Temyiz ve itiraz süreçleri",
      "Adli soruşturmalar"
    ],
    image: "/images/justice-types/ceza-hukuk.jpeg"
  },
  {
    title: "İş ve Sosyal Güvenlik Hukuku",
    subItems: [
      "İşçi-işveren uyuşmazlıkları",
      "Tazminat davaları",
      "İş sözleşmesi ve fesih konuları"
    ],
    image: "/images/justice-types/is-hukuku.png"
  },
  {
    title: "İcra ve İflas Hukuku",
    subItems: [
      "Borç tahsil davaları",
      "İcra takibi ve icra iptali",
      "Konkordato ve iflas işlemleri"
    ],
    image: "/images/justice-types/icra-hukuku.jpg"
  },
  {
    title: "Gayrimenkul ve İnşaat Hukuku",
    subItems: [
      "Kira sözleşmeleri",
      "Tapu ve mülkiyet davaları",
      "İnşaat ve proje uyuşmazlıkları"
    ],
    image: "/images/justice-types/gayrimenkul-hukuk.jpg"
  },
  {
    title: "Vergi Hukuku",
    subItems: [
      "Vergi davaları ve itirazlar",
      "Vergi cezaları ve denetimler"
    ],
    image: "/images/justice-types/vergi-hukuk.jpg"
  },
  {
    title: "Fikri Mülkiyet Hukuku",
    subItems: [
      "Marka, patent ve tasarım davaları",
      "Telif hakları ve lisans anlaşmaları"
    ],
    image: "/images/justice-types/dusunce-hukuku.webp"
  },
];

const CaseTypes = () => {
  return (
    <section className='case-types container'>
        <h2>Hizmet Alanlarımız</h2>
        <article className='practice-areas'>
            {
                practiceAreas.map(item => (
                    <section className='area-section'>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        {/* <ul>
                            {
                                item.subItems.map(i => (
                                    <li>{i}</li>
                                ))
                            }
                        </ul> */}
                    </section>
                ))
            }
        </article>
    </section>
  )
}

export default CaseTypes