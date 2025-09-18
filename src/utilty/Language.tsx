import { useEffect, useRef, useState } from "react";
import "./Language.scss";
import { FaAngleDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const languages = ["TR", "EN"];

const Language = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Dil seçimini localStorage'dan al, yoksa TR
  const getInitialLang = () => {
    const saved = localStorage.getItem("language");
    if (saved && languages.includes(saved.toUpperCase())) return saved.toUpperCase();
    return "TR";
  };

  const [chosenLanguage, setChosenLanguage] = useState<string>(getInitialLang());

  // i18n dilini hemen ayarla
  useEffect(() => {
    i18n.changeLanguage(chosenLanguage.toLowerCase());
  }, [chosenLanguage, i18n]);

  // Dropdown dışına tıklayınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguage = (language: string) => {
    setChosenLanguage(language);
    localStorage.setItem("language", language);
    i18n.changeLanguage(language.toLowerCase());
    setIsDropdownOpen(false);
  };

  return (
    <div className="language" ref={ref}>
      <div className="current-language">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {chosenLanguage} <FaAngleDown />
        </button>
        <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
          {languages.map((language) => (
            <li key={language} onClick={() => handleLanguage(language)}>
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Language;
