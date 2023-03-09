import React from 'react'
import {Box, List, Switch,
    ListItem,ListItemText, ListItemButton, ListItemIcon, Button} from '@mui/material'

const Sidebar  = () => {
    return(
        <Box flex={1} p={2} sx={{
            display: {xs: "none", sm:'block'}
        }}>
          <Box position="fixed">

         <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="/">
              <Button>
              🏠
              </Button>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#simple-list">
              <Button>
              ✏️
              </Button>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#simple-list">
              <Button>
              🧠
              </Button>
              <ListItemText primary="Devs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#simple-list">
              <Button>
              🪪
              </Button>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="/login">
              <Button>
              {/* 🤝 */}
              </Button>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="/signup">
              <Button>
              {/* ⚙️ */}
              </Button>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#simple-list">
              <Button>
              🌚
              </Button>
              <Switch/>
            </ListItemButton>
          </ListItem>
        </List>
          </Box>
        </Box>
    )
}

export default Sidebar