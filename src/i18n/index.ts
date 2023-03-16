import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PT_BR from "./locales/pt/common.json";

const resources = {
	"pt-BR": PT_BR,
};

i18n.use(initReactI18next).init({
	lng: "pt-BR",
	resources,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
