import { React, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from '@mui/material/FormLabel';
import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import {
  Tooltip,
  ButtonGroup,
  TextField,
  styled,
  Fab,
  Modal,
  Avatar,
} from "@mui/material";
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
 const  [state, setState] = useState(({
  Javascript: false, Python: false, MySQL: false, Java: false,
  Go: false, Ruby: false, C: false, TypeScript: false,
   Kotlin: false, PHP: false, Matlab: false, NoSQL: false,
   HTML: false, CSS: false, MongoDB: false, Swift: false,
   Scala: false, Rust: false, Perl: false,
 }))

 const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setState({
    ...state,
    [event.target.name]:  event.target.checked,
  })
 }
 
 const {Javascript, Python, HTML, CSS, 
  Swift, MongoDB, MySQL, Java, Go, C, 
  Ruby, Kotlin, TypeScript, PHP, NoSQL, 
  Matlab, Rust, Perl, Scala,} = state;

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
        background: "#F4CE45",
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem sx={{ background: "" }} disablePadding>
            <ListItemButton component="a" href="/">
              <Button>🤍</Button>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <Button>✏️</Button>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ background: "", borderRadius: "16px" }}
            disablePadding
          >
            <ListItemButton component="a" href="#simple-list">
              <Button>🧠</Button>
              <ListItemText primary="Devs" />
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ background: "", borderRadius: "16px" }}
            disablePadding
          >
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
            <ListItemButton component="a" href="/signup">
              <Button>{/* ⚙️ */}</Button>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <Button>👀</Button>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
        <Tooltip
          sx={{ marginLeft: 8 }}
          onClick={(e) => setOpen(true)}
          ml={2}
          title="Add"
        >
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
          <Box width={800} height={480} p={3} borderRadius={5} bgcolor="white">
            <Typography variant="h6" color="gray" textAlign="center">
              {" "}
              Create New 💖🔥Project!
            </Typography>
          

            <TextField id="standard-basic" label="Title" variant="standard" />
            <TextField
              sx={{
                width: 800,
              }}
              id="standard-multiline-static"
              multiline
              rows={3}
              label="Description"
              variant="standard"
            />
         <Box fullWidth sx={{display: 'flex', mt:2}}>
        <FormLabel component="legend">Languages</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Javascript} onChange={handleChange} name="javascript" />
            }
            label="JavaScript"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Python} onChange={handleChange} name="python" />
            }
            label="Python"
            />
          <FormControlLabel
            control={
              <Checkbox checked={PHP} onChange={handleChange} name="php" />
            }
            label="PHP"
            />
          <FormControlLabel
            control={
              <Checkbox checked={MySQL} onChange={handleChange} name="mySQL" />
            }
            label="MySQL"
            />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={C} onChange={handleChange} name="c" />
            }
            label="C"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Java} onChange={handleChange} name="java" />
            }
            label="Java"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Go} onChange={handleChange} name="go" />
            }
            label="Go"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Ruby} onChange={handleChange} name="ruby" />
            }
            label="Ruby"
            />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Kotlin} onChange={handleChange} name="kotlin" />
            }
            label="Kotlin"
            />
          <FormControlLabel
            control={
              <Checkbox checked={TypeScript} onChange={handleChange} name="typescript" />
            }
            label="TypeScript"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Matlab} onChange={handleChange} name="Matlab" />
            }
            label="Matlab"
            />
          <FormControlLabel
            control={
              <Checkbox checked={NoSQL} onChange={handleChange} name="NoSQL" />
            }
            label="NoSQL"
            />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Swift} onChange={handleChange} name="swift" />
            }
            label="Swift"
            />
          <FormControlLabel
            control={
              <Checkbox checked={MongoDB} onChange={handleChange} name="mongoDB" />
            }
            label="MongoDB"
            />
          <FormControlLabel
            control={
              <Checkbox checked={HTML} onChange={handleChange} name="HTML" />
            }
            label="HTML"
            />
          <FormControlLabel
            control={
              <Checkbox checked={CSS} onChange={handleChange} name="css" />
            }
            label="CSS"
            />
        </FormGroup>
        <FormGroup>
         
          <FormControlLabel
            control={
              <Checkbox checked={Scala} onChange={handleChange} name="scala" />
            }
            label="Scala"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Perl} onChange={handleChange} name="perl" />
            }
            label="Perl"
            />
          <FormControlLabel
            control={
              <Checkbox checked={Rust} onChange={handleChange} name="rust" />
            }
            label="Rust"
            />
        </FormGroup>
            </Box>    
            <ButtonGroup
              sx={{ mt: 2 }}
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>POST</Button>
              <Button>Draft</Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </Box>
    </Box>
  );
};

export default Sidebar;



