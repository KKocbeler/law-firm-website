import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <section className="not-found">
            <h1>{t("notFound.title")}</h1>
            <p>{t("notFound.text")}</p>
            <img src="/images/not-found.png" alt="" />
            <Link to={"/"}>{t("notFound.link")}</Link>
        </section>
    )
}

export default NotFoundPage;
