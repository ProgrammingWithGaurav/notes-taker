import React from 'react';
import Navbar from './components/Navbar';
import New from './components/New';
import View from './components/View';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
