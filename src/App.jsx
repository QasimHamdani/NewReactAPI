import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom';

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

export default App
