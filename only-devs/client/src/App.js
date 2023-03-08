import React from 'react';
import {Button, styled, Box, Typography} from '@mui/material'
import { Stack } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Feed from "./components/Feed"
import Aside from "./components/Aside"
import SideBar from './components/Sidebar';
import Navbar from './components/Navbar'
import AddProject from './components/AddProject'
import Signup from './Pages/Signup';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
return (
  <>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Box>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Feed />
            <Aside />
          </Stack>
          <AddProject />
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