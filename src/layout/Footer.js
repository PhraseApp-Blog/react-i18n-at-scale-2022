import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {t("footer")}
      </Typography>

      <Typography variant="body2" color="text.secondary" align="center">
        {`${t("copyright")} © `}
        <Link color="inherit" href="https://phrase.com/">
          Phrase
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
