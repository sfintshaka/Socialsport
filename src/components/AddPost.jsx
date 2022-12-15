import {
  Add,
  Article,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  Whatshot,
} from "@mui/icons-material";
import {
  Box,
  Fab,
  Modal,
  Tooltip,
  styled,
  Avatar,
  Typography,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";

const PostModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const IconsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% + 128px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <PostModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={3}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <IconsContainer>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/7093657/pexels-photo-7093657.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <Typography fontWeight={500} variant="span">
              Danny Sithole
            </Typography>
          </IconsContainer>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Share your sport mind"
            variant="standard"
          />
          <Stack direction="row" gap={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <Article color="error" />
            <Whatshot color="primary" />
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>Go live</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </PostModal>
    </>
  );
};
