import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Success from './Sucess'
import Form from './Form'
import { Routes } from "react-router-dom";



function App() {
  

  return (
    <>
     
        <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
        </Routes>
    </>
  )
}

export default App
