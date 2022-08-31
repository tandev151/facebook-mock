import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./translate/en/common.json";
import common_vi from "./translate/vi/common.json";

const resources = {
  en: {
    common: common_en,
  },
  vi: {
    common: common_vi,
  },
};

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: "vi",
  interpolation: { escapeValue: false },
});

export default i18next;
