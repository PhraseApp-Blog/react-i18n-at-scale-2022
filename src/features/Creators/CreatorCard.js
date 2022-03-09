import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { dirStyle } from "../../services/i18n";

export default function CreatorCard(props) {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "310px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Avatar alt={t(props.name)} src={`/img/${props.avatarImage}`} />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "0.85rem",
              ...dirStyle({ ml: 1 }),
            }}
          >
            {t(props.name)}
          </Typography>
        </Stack>

        <Chip
          label={t("topRated")}
          color="primary"
          size="small"
          sx={{ width: "80px" }}
        />
      </Box>

      <Stack direction="row">
        <CardMedia component="img" image={props.productImage1} alt="" />
        <CardMedia component="img" image={props.productImage2} alt="" />
      </Stack>
      <CardContent>
        <Typography
          variant="h6"
          component="h5"
          sx={{
            fontWeight: "200",
            fontSize: "0.75rem",
            textTransform: "uppercase",
          }}
        >
          {t("specialties")}
        </Typography>
        <Typography component="ul" sx={{ px: 2, fontSize: "0.85rem" }}>
          {props.specialties.map((s) => (
            <li key={s}>{t(s)}</li>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
