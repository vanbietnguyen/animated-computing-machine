import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ShopPage from './pages/shoppage/ShopPage.container'

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/shop" element={<ShopPage />}/>
      </Routes>
    </div>
  );
}

export default App;
