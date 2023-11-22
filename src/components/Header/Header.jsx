import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";
import { useAuth } from "../../contexts/UserContext/UserContent";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, handleLogout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        {currentUser ? (
          <Stack direction={"row"} spacing={2}>
            <Typography>{currentUser.hoTen}</Typography>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                handleLogout();
                navigate(PATH.SIGN_IN);
              }}
            >
              Logout
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2} direction={"row"}>
            <Button variant="outlined" onClick={() => navigate(PATH.SIGN_UP)}>
              Signup
            </Button>
            <Button variant="contained" onClick={() => navigate(PATH.SIGN_IN)}>
              Signin
            </Button>
          </Stack>
        )}
      </Toolbar>
      {/* </AppBar> */}
    </Box>
  );
};

export default Header;
