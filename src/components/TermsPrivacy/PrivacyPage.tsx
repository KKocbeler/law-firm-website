import "./PrivacyPage.scss";

const termsSections = [
  {
    title: "Genel Bilgiler",
    content: `Bu siteyi kullanarak, site kurallarına ve kullanım şartlarına uymayı kabul etmiş olursunuz. 
    Sitedeki bilgiler yalnızca bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. 
    Siteyi kullanarak, buradaki bilgileri kendi sorumluluğunuz altında değerlendirmeyi kabul etmiş olursunuz.`
  },
  {
    title: "Kullanıcı Sorumlulukları",
    content: `Kullanıcılar siteyi yasalara uygun bir şekilde kullanmakla yükümlüdür. 
    Siteyi zarar verici, yasadışı, saldırgan veya yanıltıcı amaçlarla kullanamazsınız. 
    Diğer kullanıcıların deneyimini olumsuz etkileyecek herhangi bir eylemde bulunmak yasaktır. 
    Siteye giriş sırasında verdiğiniz bilgilerin doğruluğundan kullanıcı sorumludur.`
  },
  {
    title: "İçerik ve Telif Hakları",
    content: `Sitedeki tüm metin, görsel, logo, video ve diğer içerikler telif hakkıyla korunmaktadır. 
    İzinsiz kopyalanması, çoğaltılması, dağıtılması veya üçüncü taraflarla paylaşılması yasaktır. 
    İçerikler yalnızca bilgilendirme ve kişisel kullanım amaçlı sunulmaktadır.`
  },
  {
    title: "Sorumluluk Reddi",
    content: `Site, içeriklerin doğruluğu, güncelliği ve eksiksizliği konusunda garanti vermez. 
    Sunulan bilgiler yalnızca genel bilgilendirme niteliğindedir ve kullanıcıların kendi araştırmalarını yapmaları gerekmektedir. 
    Hukuki konularda doğru ve güvenilir bilgi için lütfen doğrudan uzman bir avukata danışınız.`
  },
  {
    title: "Değişiklikler",
    content: `Sitemiz, kullanım şartlarını herhangi bir zamanda değiştirme hakkını saklı tutar. 
    Güncel kullanım şartları bu sayfada yayımlanacaktır ve siteyi kullanmaya devam eden kullanıcılar, değişiklikleri kabul etmiş sayılır.`
  },
  {
    title: "Gizlilik ve Veri Koruma",
    content: `Siteyi kullanırken sağladığınız bilgiler, Gizlilik Politikası kapsamında korunur. 
    Kişisel bilgileriniz üçüncü kişilerle paylaşılmaz ve yalnızca hizmetlerin iyileştirilmesi amacıyla kullanılır. 
    Kullanıcı, kendi bilgilerini doğru ve güncel tutmakla yükümlüdür.`
  },
  {
    title: "Bağlantılar",
    content: `Sitede yer alan üçüncü taraf bağlantılar yalnızca referans amaçlıdır. 
    Bağlantılı sitelerin içeriklerinden sitemiz sorumlu değildir ve kullanıcılar bu siteleri kendi sorumlulukları altında ziyaret eder.`
  }
];


const PrivacyPage = () => {
  return (
    <div className="privacy container">
      <div className="privacy-container">
        <h1>Kullanım Şartları ve Gizlilik Politikası</h1>
        {termsSections.map((section, index) => (
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
