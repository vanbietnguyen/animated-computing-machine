import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ShopPage from './pages/shoppage/ShopPage.container'
import Header from './components/header/Header'
import Auth from './pages/Auth'

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path='/signin' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
