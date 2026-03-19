// client/src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// HIGHLIGHT START
// 1. Import the Navbar component we just created
import Navbar from './components/Navbar';
// HIGHLIGHT END

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard'; 

function App() {
  return (
    <BrowserRouter>
      {/* The main container for your application */}
      <div className="App">
        {/* HIGHLIGHT START */}
        {/* 2. Render the Navbar component here. It will now appear on every page. */}
        <Navbar />
        {/* HIGHLIGHT END */}
        
        {/* We can add some padding to the main content area to prevent it from sitting right under the navbar */}
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;