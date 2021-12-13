// import logo from './logo.svg';
// import Button from '@mui/material/Button';
import './App.css';
import {
  BrowserRouter, Routes, Route,
  //  Outlet, Link 
} from "react-router-dom";

import { SignIn, SignUp } from './components/index';
// import { Router } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
