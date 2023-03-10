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
              MB
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Weather App"
          ///////SHOULD BE A WAY TO DO DATED CREATED HERE////////
          subheader="March 2, 2023"
        />
        <CardMedia
          component="card"
          height="194"
          //////NEED THE RIGHT DIRECTORY TO IMAGES////THIS IS  WHERE THE SKILLS NEEDED WILL APPEAR
          // image="../src/media/download"
          // alt="placeHolder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          A weather app that provides real-time weather information using data from OpenWeatherMap API.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Skills Needed: JavaScript, React, MongoDB
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Button variant="text">Save</Button>
        <Button variant="text">COLLABORATE 🤝 </Button>
        </CardActions>
      </Card>

      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#F23838" }} aria-label="project">
              CG
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="E-Commerce Website"
          ///////SHOULD BE A WAY TO DO DATED CREATED HERE////////
          subheader="October 23, 2022"
        />
        <CardMedia
          component="card"
          height="194"
          //////NEED THE RIGHT DIRECTORY TO IMAGES////THIS IS  WHERE THE SKILLS NEEDED WILL APPEAR
          // image="../src/media/download"
          // alt="placeHolder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          An e-commerce website that sells products and accepts payments using Stripe API.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Skills Needed: JavaScript, Node.js
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Button variant="text">Save</Button>
        <Button variant="text">COLLABORATE 🤝 </Button>
        </CardActions>
      </Card>

      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#F23838" }} aria-label="project">
              BB
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Fitness Tracker"
          ///////SHOULD BE A WAY TO DO DATED CREATED HERE////////
          subheader="February 9, 2023"
        />
        <CardMedia
          component="card"
          height="194"
          //////NEED THE RIGHT DIRECTORY TO IMAGES////THIS IS  WHERE THE SKILLS NEEDED WILL APPEAR
          // image="../src/media/download"
          // alt="placeHolder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          A fitness tracker that helps users track their workouts and progress using data visualization.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Skills Needed: React, MUI
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Button variant="text">Save</Button>
        <Button variant="text">COLLABORATE 🤝 </Button>
        </CardActions>
      </Card>

      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#F23838" }} aria-label="project">
              FB
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Recipe Sharing App"
          ///////SHOULD BE A WAY TO DO DATED CREATED HERE////////
          subheader="December 12, 2022"
        />
        <CardMedia
          component="card"
          height="194"
          //////NEED THE RIGHT DIRECTORY TO IMAGES////THIS IS  WHERE THE SKILLS NEEDED WILL APPEAR
          // image="../src/media/download"
          // alt="placeHolder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          An app that allows users to share and browse recipes with a community of other users.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Skills Needed: C++
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Button variant="text">Save</Button>
        <Button variant="text">COLLABORATE 🤝 </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Project;
