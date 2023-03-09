import React from "react";
import {
  Button,
  Box,
  Card,
  CardHeader,
  Checkbox,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
const Project = () => {
  return (
    <Box>
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#F23838" }} aria-label="project">
              C
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Codelethics"
          ///////SHOULD BE A WAY TO DO DATED CREATED HERE////////
          subheader="March 2, 2023"
        />
        <CardMedia
          component="img"
          height="194"
          //////NEED THE RIGHT DIRECTORY TO IMAGES////THIS IS  WHERE THE SKILLS NEEDED WILL APPEAR
          image="../src/media/download"
          alt="placeHolder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            THIS IS A STARTER CODE THAT DOES STARTER STUFF. UHM I NEED SOME
            STRONG BACK-ENDERS TO HOLD...I MEAN HELP ME. UWU
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"></IconButton>
          <IconButton aria-label="share"></IconButton>
        </CardActions>
        <Button variant="text">COLLABORATE 🤝 </Button>
      </Card>
    </Box>
  );
};

export default Project;
