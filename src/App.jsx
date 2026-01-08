import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom';
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


  return (
    <>
      <Home/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

<Routes>
      <Route path="/login" element={<Login />} />
</Routes>

export default App
