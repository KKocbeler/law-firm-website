import { CiCircleCheck } from "react-icons/ci";
import "./SectionOne.scss";
import { GoLaw } from 'react-icons/go'

const SectionOne = () => {
  return (
    <div className='section-one container'>
        <div className="image-section">
            <img src="/images/themis.png" alt="themis image" loading='lazy' />
            <div className="badge">
                <span>18</span>
                <p>Yıllık <br /> Tecrübe</p>
            </div>
        </div>
        <div className="content-section">
            <GoLaw />
            <p className="title">Her Türlü <b>hukuksuzluğa</b> karşı yanınızdayız.</p>
            <p className="paragraph">Hukuk alanındaki her konuda güçlü ve güvenilir destek sağlıyoruz. Sizin haklarınızı korumak ve adil çözümler sunmak için buradayız.</p>
            <section className="features">
                <ul className="features__list">
                    <li className="features__list-item"><CiCircleCheck /> Hukuki konularda güvenilir danışmanlık sağlıyoruz.</li>
                    <li className="features__list-item"><CiCircleCheck /> Sözleşme ve dava takibini hızlı ve doğru şekilde yapıyoruz.</li>
                    <li className="features__list-item"><CiCircleCheck /> Aile hukuku ve miras konularında destek veriyoruz.</li>
                    <li className="features__list-item"><CiCircleCheck /> Ticaret ve şirket hukuku hizmetlerinde yanınızdayız.</li>
                    <li className="features__list-item"><CiCircleCheck /> Miras ve vasiyet işlemlerini dikkatle yönetiyoruz.</li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default SectionOne