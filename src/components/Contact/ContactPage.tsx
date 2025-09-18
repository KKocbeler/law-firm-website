import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <>
    <div className="contact__hero-section">
        <section className="">
            <div className="contact__hero-content">
                <h1>İLETİŞİM</h1>
            </div>
        </section>
    </div>
    <div className="contact-main container">
        <p>Bize her zaman ulaşabilirsiniz. Sorularınız, danışmanlık talepleriniz veya randevu almak için aşağıdaki iletişim bilgilerimizi kullanabilirsiniz. Profesyonel ekibimiz size en kısa sürede geri dönecektir.</p>
        <p>Hukuki danışmanlık veya sorularınız için bizimle iletişime geçmekten çekinmeyin</p>
        <p>Taleplerinize en kısa sürede geri dönüş yapılacaktır. Hukuk büromuz, müvekkil gizliliğine ve güvenine büyük önem vermektedir.</p>
        <div className="contact-info">
            <div className="contact__mail">
                <p>E-posta Gönderin</p>
                <a href="mailto:example@example.com">example@example.com</a>
            </div>
            <div className="contact__phone">
                <p>Bizi Arayın</p>
                <a href="tel:+905321797155">+90 532 179 71 55</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactPage