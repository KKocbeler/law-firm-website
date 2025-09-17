import "./UsefulLink.scss";

const links = [
    { label: "Anayasa Mahkemesi", path: "images/useful-links/anayasa-mahkemesi.png", url: "https://www.anayasa.gov.tr/" },
    { label: "TBMM", path: "images/useful-links/tbmm.png", url: "https://www.tbmm.gov.tr/" },
    { label: "Türkiye Barolar Birliği", path: "images/useful-links/türkiye-barolar-birligi.png", url: "https://www.barobirlik.org.tr/" },
    { label: "Danıştay", path: "images/useful-links/danistay.png", url: "https://www.danistay.gov.tr/" },
    { label: "Yargıtay", path: "images/useful-links/yargitay.png", url: "https://www.yargitay.gov.tr/" },
    { label: "Interpol", path: "images/useful-links/interpol.webp", url: "https://www.interpol.int/" },
    { label: "European Court of Human Rights", path: "images/useful-links/european-court-of-human-rights.png", url: "https://www.echr.coe.int/" },
]
const UsefulLink = () => {
  return (
    <div className="useful-links">
        <ul>
            {
                links.map(link => (
                    <li key={link.label}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={link.path} alt={link.label} title={link.label} />
                        </a>
                    </li>
                ))
            }

        </ul>
    </div>
  )
}

export default UsefulLink