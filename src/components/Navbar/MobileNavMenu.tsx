import type React from 'react';
import { Link } from 'react-router-dom';
import "./MobileNavMenu.scss";
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';

interface PropTypes {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const navMenu = [
    {label: "Anasayfa", path: "/"},
    {label: "Ekibimiz", path: "/our-team"},
    {label: "Hakkımızda", path: "/about-us"},
    {label: "İletişim", path: "/"},
]

const MobileNavMenu = ({isOpen, setIsOpen}: PropTypes) => {

    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    })
  return (
    <div className={`mobile-nav-menu ${isOpen ? "show" : ""}`}>
        <header>
            <img src="/images/brand-logo.png" alt="Şirket Logosu" />
            <button type='button' aria-label='Menü kapat' onClick={() => setIsOpen(false)}><IoCloseOutline /></button>
        </header>
        <ul className="nav-menu__list">
            {
                navMenu.map(navItem => (
                    <li className="nav-menu__item">
                        <Link to={navItem.path} onClick={() => setIsOpen(!isOpen)}>
                            {navItem.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default MobileNavMenu