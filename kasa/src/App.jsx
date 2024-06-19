import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Housing from './pages/housing/housing'
import Error from './pages/error/error-404'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />       
          <Route path="/about" element={<About />} />
          <Route path='/hebergement' element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
