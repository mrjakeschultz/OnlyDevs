import {React, useState} from 'react';
import {Button, styled, Box, Typography} from '@mui/material'
import { Stack } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Feed from "./components/Feed"
import Aside from "./components/Aside"
import SideBar from './components/Sidebar';
import Navbar from './components/Navbar'

import Signup from './Pages/Signup';
import Login from './Pages/Login';
// import { createTheme, ThemeProvider } from '@mui/material';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  //////DARK MODE/////////////////////////
// const [mode, setMode] =useState('light')

  // const darkTheme = createTheme ({
  //   palette:{
  //     mode: mode
  //   }
  // })
  ////////END Of DARK MODE////////////////
return (
  <>
  

    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Box>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Feed />
            <Aside />
          </Stack>
          
        </Box>

      </Router>
    </ApolloProvider>
  </>
);

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