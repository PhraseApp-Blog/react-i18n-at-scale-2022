import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export const dirStyle = (styles) => {
  const dir = i18next.dir(i18next.language || "en");
  let result = {};

  if (dir === "rtl") {
    Object.keys(styles).forEach((s) => {
      if (s.length === 2) {
        if (s.charAt(1) === "l") {
          result[`${s.charAt(0)}r`] = styles[s];
        } else if (s.charAt(1) === "r") {
          result[`${s.charAt(0)}l`] = styles[s];
        }
      } else {
        result[s] = styles[s];
      }
    });

    return result;
  }

  return styles;
};

export default i18next;
