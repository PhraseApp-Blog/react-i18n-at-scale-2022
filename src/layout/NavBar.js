import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import {
  Star as StarIcon,
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  AccountCircle as AccountIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "../features/L10n/LocaleSwitcher";
import { dirStyle } from "../services/i18n";

const startMenuItems = {
  featured: <StarIcon />,
  search: <SearchIcon />,
};
const endMenuItems = {
  account: <AccountIcon />,
  cart: <CartIcon />,
};

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {t("appTitle")}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ flexGrow: 1, ...dirStyle({ pl: 4 }) }}
        >
          {Object.keys(startMenuItems).map((mi) => (
            <Button key={mi} variant="text" sx={{ color: "#fff" }}>
              <Box
                sx={{
                  ...dirStyle({ ml: "-4px", mr: "8px" }),
                  display: "inherit",
                }}
                component="span"
              >
                {startMenuItems[mi]}
              </Box>
              {t(mi)}
            </Button>
          ))}
        </Stack>

        <Box
          sx={{ display: "flex", flexGrow: 0, flexDirection: "row-reverse" }}
        >
          <LocaleSwitcher />

          {Object.keys(endMenuItems).map((mi) => (
            <IconButton
              key={mi}
              aria-label={t(mi)}
              title={t(mi)}
              sx={{ color: "#fff" }}
            >
              {endMenuItems[mi]}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
