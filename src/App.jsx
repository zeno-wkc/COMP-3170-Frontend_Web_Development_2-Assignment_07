// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Countries from "./components/Countries";
import Details from "./components/Details";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter basename="/COMP-3170-Frontend_Web_Development_2-Assignment_07">
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="countries/:cca2" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
