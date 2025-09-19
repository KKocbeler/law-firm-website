import type React from 'react';
import { Link } from 'react-router-dom';
import "./MobileNavMenu.scss";
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import Language from '../../utilty/Language';
import Phone from '../../utilty/Phone';
import { useTranslation } from "react-i18next";

interface PropTypes {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenu = ({isOpen, setIsOpen}: PropTypes) => {
    const { t } = useTranslation();

    const navMenu = [
        {label: t("nav.home"), path: "/"},
        {label: t("nav.team"), path: "/our-team"},
        {label: t("nav.about"), path: "/about-us"},
        {label: t("nav.contact"), path: "/contact"},
    ];

    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    }, [isOpen]);

  return (
    <div className={`mobile-nav-menu ${isOpen ? "show" : ""}`}>
        <header>
            <img src="/images/brand-logo.png" alt="Ayerden Demirhan Hukuk Bürosu" loading='lazy'/>
            <button type='button' aria-label='Menü kapat' onClick={() => setIsOpen(false)}>
                <IoCloseOutline />
            </button>
        </header>
        <div className='nav-menu__section'>
            <Phone />
            <Language />
        </div>
        <ul className="nav-menu__list">
            {navMenu.map((navItem, index) => (
                <li className="nav-menu__item" key={index} onClick={() => setIsOpen(!isOpen)}>
                    <Link to={navItem.path}>{navItem.label}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MobileNavMenu;
