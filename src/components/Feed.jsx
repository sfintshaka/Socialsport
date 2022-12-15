import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  MoreVertOutlined,
  Share,
} from "@mui/icons-material";

export const Feed = () => {
  return (
    <Box flex={4} p={5} m={5} sx={{ marginRight: { xs: "20px", sm: "10px" } }}>
      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "pink" }} aria-label="goal">
              DS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title="Danny Sithole"
          subheader="September 14, 2013"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Soccer ball"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the perfect ball that was used for FIFA world cup in Brazil
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "cyan" }} aria-label="goal">
              DS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title="Daniel Sithole"
          subheader="December 11, 2013"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Soccer ball"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the perfect ball that was used for FIFA world cup in Brazil
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="goal">
              DS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title="Daniel Sithole"
          subheader="January 14, 2014"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Soccer ball"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the perfect ball that was used for FIFA world cup in Brazil
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "violet" }} aria-label="goal">
              DS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title="Danny Sithole"
          subheader="September 12, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Soccer ball"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the perfect ball that was used for FIFA world cup in Brazil
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "green" }} aria-label="goal">
              DS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title="Daniel Sithole"
          subheader="October 14, 2015"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Soccer ball"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the perfect ball that was used for FIFA world cup in Brazil
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
