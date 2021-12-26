import React from 'react';
import Navbar from './components/Navbar';
import New from './components/New';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
