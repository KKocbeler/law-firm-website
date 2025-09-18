import "./Navbar.scss";
import "../../styles/_variables.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavMenu from "./MobileNavMenu";
import Phone from "../../utilty/Phone";
import Language from "../../utilty/Language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navMenu = [
        {label: t("nav.home"), path: "/"},
        {label: t("nav.team"), path: "/our-team"},
        {label: t("nav.about"), path: "/about-us"},
        {label: t("nav.contact"), path: "/contact"},
    ];

    useEffect(() => {
        const activePaths = ["/terms-and-privacy"];
        if (activePaths.includes(location.pathname) || !["/", "/our-team", "/about-us", "/contact"].includes(location.pathname)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location]);

    return (
        <nav className= {isActive ? "active" : ""}>
            <div className="nav-left">
                <div className="nav-logo">
                    <Link to={"/"}>
                        <img src="/images/brand-logo.png" alt="" />
                    </Link>
                </div>
                <div className={`nav-menu ${isOpen ? "show" : ""}`}>
                    <ul className="nav-menu__list">
                        {navMenu.map((navItem, index) => (
                            <li className={`nav-menu__item ${location.pathname === navItem.path ? "active" : ""}`} key={index} >
                                <Link to={navItem.path}>{navItem.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className="nav-right">
                <Phone />
                <Language />
                <div className="nav-hamburger">
                    <button type="button" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
