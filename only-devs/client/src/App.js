import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
   <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
      <div>DIS BE RENDERING</div>
   </ApolloProvider> 
  );
}

export default App;
