import React from 'react';
import {Button, styled, Box, Typography} from '@mui/material'
import { Stack } from '@mui/system';

import Feed from "./components/Feed"
import Aside from "./components/Aside"
import SideBar from './components/Sidebar';
import Navbar from './components/Navbar'
import AddProject from './components/AddProject'

function App() {
return(
  
  <Box>
    <Navbar/>
    <Stack direction="row" spacing={2}  justifyContent='space-between'>
      <SideBar />
      <Feed/>
      <Aside/>
    </Stack>
    <AddProject/>
  </Box>
)

}

export default App;


// const CustomButton1 = styled(Button)(({theme})=>({
//   backgroundColor: '#F2B749',
// margin: 5,
// color: '#FFFDEA',
// '&:hover': {
// backgroundColor:'#F2949C'
// },
// "&:disabled": {
// backgroundColor: 'gray',
// color: 'white'
// },
// }))
// return (
//   <div>
// <Button variant="text">Text</Button>
// <Button 

// variant="contained" color="primary">Create New Project</Button>
// <Button variant="contained" color="secondary">SignUp</Button>

// <Button variant="outlined">SignIn</Button>
// {
// /* There is already an h1 in the page, let's not duplicate it. */
// }
// <Typography variant="h1" component="h2">
// h1. Heading
// </Typography>;
// <CustomButton1>wtf</CustomButton1>

//   </div>
// )