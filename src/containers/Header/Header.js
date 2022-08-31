import React from "react";
import { useTranslation } from "react-i18next";
function Header() {
  const { t, i18n } = useTranslation("common");
  console.log(t);
  return (
    <div className="header">
      <div className="header__left">
        {t("welcome.title")}
        <button onClick={() => i18n.changeLanguage("vi")}>vi</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
