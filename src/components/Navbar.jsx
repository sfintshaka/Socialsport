import React, { useState } from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Box,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  AcUnit,
  Mail,
  Notifications,
  SportsCricket,
  SportsRugby,
  SportsSoccer,
  SportsTennis,
} from "@mui/icons-material";

const OwnToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserShrink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [sport, setSport] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSport(event.target.value);
  };
  return (
    <AppBar position="sticky">
      <OwnToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Danny
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>
        {/* This is where the types of sports are chosen */}
        <Box sx={{ minWidth: 70, padding: "5px", minHeight: 5 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sport}
              label="Sport"
              onChange={handleChange}
            >
              <MenuItem value={20}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <SportsSoccer />
                  Soccer
                </Typography>
              </MenuItem>

              <MenuItem value={30}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <SportsTennis />
                  Tennis
                </Typography>
              </MenuItem>

              <MenuItem value={40}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <SportsCricket />
                  Cricket
                </Typography>
              </MenuItem>

              <MenuItem value={50}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <SportsRugby />
                  Rugby
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/7093657/pexels-photo-7093657.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            onClick={(e) => setOpen(true)}
          />
        </IconsContainer>
        <UserShrink onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/7093657/pexels-photo-7093657.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Typography variant="span "> Danny Sithole</Typography>
        </UserShrink>
      </OwnToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
