import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Top Leagues
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  sx={{ width: "30px", height: "30px" }}
                  alt="England"
                  src="https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898__340.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="EPL" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  sx={{ width: "30px", height: "30px" }}
                  alt="Spain"
                  src="https://cdn.pixabay.com/photo/2012/04/11/15/33/spain-28530__340.png"
                />
              </ListItemIcon>
              <ListItemText primary="Spanish Laliga" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  sx={{ width: "30px", height: "30px" }}
                  alt="Italy"
                  src="https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__340.png"
                />
              </ListItemIcon>
              <ListItemText primary="Serie A" />
            </ListItemButton>
          </ListItem>
        </List>
        <Typography variant="h6" fontWeight={100}>
          Leagues
        </Typography>
      </Box>
    </Box>
  );
};
