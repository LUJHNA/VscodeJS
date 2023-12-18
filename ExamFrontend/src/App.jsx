import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import DropdownForm from './SelectRoute';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/selectroute" element={<DropdownForm />} />
            </Routes>
        </Router>
    </>
  )
}


export default App
