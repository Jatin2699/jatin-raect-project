import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar
          sx={{
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">
            <Link
              underline="none"
              component={RouterLink}
              to={"/"}
              sx={{ color: "white" }}
            >
              RCommercy
            </Link>
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <RouterLink to={"/"}>
              <Button variant="outlined" sx={{ color: "white" }}>
                home
              </Button>
            </RouterLink>
            <RouterLink to={"/login"}>
              <Button variant="outlined" sx={{ color: "white" }}>
                Login
              </Button>
            </RouterLink>
            <RouterLink to={"/cart"}>
              <Button
                variant="outlined"
                sx={{ color: "white" }}
                endIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
            </RouterLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;