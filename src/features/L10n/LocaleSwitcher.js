import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  function switchLocale(newLocale) {
    if (newLocale === i18n.language) return;
    i18n.changeLanguage(newLocale);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Button
        variant="text"
        sx={{ color: "#fff" }}
        onClick={() => switchLocale("en")}
      >
        English
      </Button>
      <Button
        variant="text"
        sx={{ color: "#fff" }}
        onClick={() => switchLocale("ar")}
      >
        العربية
      </Button>
    </Box>
  );
}
