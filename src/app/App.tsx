import React from 'react'
import Outline from './outline'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outline>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/stackline-oa/" element={<Home />} />
          </Routes>
        </Router>
      </Outline>
    </div>
  )
}

export default App
