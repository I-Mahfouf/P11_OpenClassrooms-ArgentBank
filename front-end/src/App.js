import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/homepage/index';
import Login from './pages/loginpage/index';
import UserProfile from './pages/userpage/index';

function App() {
  // Extrait l'état actuel de connexion //
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/userpage" replace /> : <Login />}
        />
        <Route
          path="/userpage"
          element={isLoggedIn ? <UserProfile /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
