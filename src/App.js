// App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Login from './pages/login';
import Signup from './pages/signup';  // Corrected import statement
import { Home } from './pages/home';
import Add from "./pages/add"
import Sub from "./pages/subTract"
import Divide from "./pages/divide"
import Multi from "./pages/mulitplication"
import NavBar from './pages/navbar';
const App = () => {
  return (
    <BrowserRouter>
            <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path ="/add" element ={<Add />}></Route>
        <Route path ="/multi" element ={<Multi />}></Route>
        <Route path ="/sub" element ={<Sub />}></Route>
        <Route path ="/div" element ={<Divide />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
