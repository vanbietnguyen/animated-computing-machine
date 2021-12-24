import React from 'react'
import Homepage from './homepage/Homepage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/hats" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
