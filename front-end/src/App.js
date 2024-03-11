import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/homepage/index';
import Login from './pages/loginpage/index';
import UserProfile from './pages/userpage/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;