import {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => setHamburgerMenuOpen(true);

  const handleMenuClose = (path) => {
    setHamburgerMenuOpen(false);
    if (path) navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          MUI Demo
        </Typography>

        {/* Hamburger Icon */}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>

        <Menu
          open={hamburgerMenuOpen}
          onClose={() => handleMenuClose()}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={() => handleMenuClose("/")}>Dashboard</MenuItem>
          <MenuItem onClick={() => handleMenuClose("/settings")}>Settings</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
