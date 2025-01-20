import React from 'react'
import Outline from './outline'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outline>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Outline>
    </div>
  )
}

export default App
