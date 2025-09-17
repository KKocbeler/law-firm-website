import "./Navbar.scss";
import "../../styles/_variables.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavMenu from "./MobileNavMenu";

const navMenu = [
    {label: "Anasayfa", path: "/"},
    {label: "Ekibimiz", path: "/our-team"},
    {label: "Hakkımızda", path: "/about-us"},
    {label: "İletişim", path: "/"},
]

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    if (location.pathname === "/terms-and-privacy") {
        setIsActive(true);
    } else {
        setIsActive(false);
    }
    }, [location]);
        console.log(isOpen)
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
                        {
                            navMenu.map(navItem => (
                                <li className="nav-menu__item">
                                    <Link to={navItem.path}>
                                        {navItem.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className="nav-right">
                <div className="phone">
                    <div className="phone-icon">
                        <BsFillTelephoneOutboundFill /> 
                    </div>
                    <span>+90 555 555 55 55</span>
                </div>
                <div className="nav-language">
                    <div className="tr">TR</div>
                </div>
                <div className="nav-hamburger">
                    <button type="button" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar