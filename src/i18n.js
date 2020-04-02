import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const fallBackLng = ["en"];
const availableLanguages = ["en", "sv", "es"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallBackLng,
    whiteList: availableLanguages,
    interpolation: { escapeValue: false }
  });

export default i18n;
