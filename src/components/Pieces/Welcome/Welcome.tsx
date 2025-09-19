import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Welcome.scss";

const Welcome = () => {
    const { t } = useTranslation();
    const [hideWelcome, setHideWelcome] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideWelcome(true);
        }, 750);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`welcome ${hideWelcome ? "hide" : ""}`}>
            <section className="welcome-content">
                <img src="/images/brand-logo.png" alt="Şirket logosu" />
                <h1 style={{ whiteSpace: "pre-line" }}>
                    {t("welcome.title")}
                </h1>
            </section>
        </div>
    )
}

export default Welcome;
