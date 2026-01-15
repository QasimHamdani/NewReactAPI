import React from 'react'
import './App.css'
import Home from './Home'
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Home
    </button>
  );
};

function App() {

return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
</Routes>
  );
}


export default  App

