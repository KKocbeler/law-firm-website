import { useEffect, useState } from "react";
import "./Welcome.scss";

const Welcome = () => {
    const [hideWelcome, setHideWelcome] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHideWelcome(true)
        }, 500);
    }, [])
  return (
    <div className={`welcome ${hideWelcome ? "hide" : ""}`}>
        <div className="welcome-content">
            <img src="/images/brand-logo.png" alt="Şirket logosu" />
            <h1 >AYERDEN DEMİRHAN <br /> HUKUK BÜROSU</h1>
        </div>
    </div>
  )
}

export default Welcome