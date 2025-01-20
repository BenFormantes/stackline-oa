import React from 'react'
import Navbar from './components/Navbar'

interface OutlineProps {
  children: React.ReactNode
}

const Outline: React.FC<OutlineProps> = ({ children }) => {
  return (
    <div>
      <div>
        {/* Header */}
        <Navbar />

        {/* Main content */}
        <main>
          {/* Content */}
          {children}
        </main>

        {/* Footer */}
      </div>
    </div>
  )
}

export default Outline
