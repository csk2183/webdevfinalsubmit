import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { UserProvider } from '../UserContext';  // Import UserProvider from your UserContext file
import Navbar from './Navbar';
//import Signup from './Signup';
//import Login from './Login';
import HomePage from './Homepage';
import Main from './Main';  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<Main />} />
          </Routes>
      </Router>
  );
}

export default App;
