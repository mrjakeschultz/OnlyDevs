import { React, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddIcon from "@mui/icons-material/Add";
import { Tooltip, TextField, styled, Fab, Modal } from "@mui/material";
import {
  Box,
  List,
  Switch,
  Typography,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Button,
} from "@mui/material";

const Sidebar = () => {
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const [open, setOpen] = useState(false);
  // const [language, setLanguage] = useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setLanguage(event.target.value as string)
  // }

  return (
    <Box
      flex={1}
      p={2}
      sx={{
        background: '',
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem sx={{background:'#F4CE45'}}  disablePadding>
            <ListItemButton component="a" href="/">
              <Button >🏠</Button>
              <ListItemText  primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <Button>✏️</Button>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <Button>🧠</Button>
              <ListItemText primary="Devs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <Button>🪪</Button>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/login">
              <Button>{/* 🤝 */}</Button>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/signup">
              <Button>{/* ⚙️ */}</Button>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <Button>🌚</Button>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
        <Tooltip sx={{marginLeft: 8}}onClick={(e) => setOpen(true)} ml={2} title="Add">
          <Fab color="#F2B749" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>

        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box width={800} height={280} p={3} borderRadius={5} bgcolor="white">
            <Typography variant="h6" color="gray" textAlign="center">
              {" "}
              Create New 💖🔥Project!
            </Typography>
            {/* <UserBox>
    // <Avatar>
    //   src='../media/shawn2.jpg'
    //   sx={{
    //     width: 30, height: 30
    //   }}
    // </Avatar>
    <Typography fontWeight={400} variant="span">Kitty Phantom</Typography>
   </UserBox> */}
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
            />
            <TextField 
            sx={{
              width:800
            }}
              id="standard-multiline-static"
              multiline
              rows={4}
              label="Description"
              variant="standard"
            />
            <FormControl fullWidth sx={{
              mt:2
            }}>

  <InputLabel id="language-dropdown">Languages</InputLabel>
  <Select
  
    id="select-languages"
    // value={Language}
    // label="Language"
    // onChange={handleChange}
  >
    <MenuItem value={1}>Javascript</MenuItem>
    <MenuItem value={2}>Python</MenuItem>
    <MenuItem value={3}>Java</MenuItem>
    <MenuItem value={4}>Go</MenuItem>
    <MenuItem value={5}>Kotlin</MenuItem>
    <MenuItem value={6}>PHP</MenuItem>
    <MenuItem value={7}>C#</MenuItem>
    <MenuItem value={8}>Swift</MenuItem>
    <MenuItem value={9}>R</MenuItem>
    <MenuItem value={10}>Ruby</MenuItem>
    <MenuItem value={11}>C and C ++</MenuItem>
    <MenuItem value={12}>Matlab</MenuItem>
    <MenuItem value={13}>TypeScript</MenuItem>
    <MenuItem value={14}>Scala</MenuItem>
    <MenuItem value={15}>SQL</MenuItem>
    <MenuItem value={16}>HTML</MenuItem>
    <MenuItem value={17}>CSS</MenuItem>
    <MenuItem value={18}>NoSQL</MenuItem>
    <MenuItem value={19}>Rust</MenuItem>
    <MenuItem value={20}>Perl</MenuItem>
  </Select>
</FormControl>
          </Box>
        </StyledModal>
      </Box>
    </Box>
  );
};

export default Sidebar;