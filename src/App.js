import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {      
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element = {<HomePage />} />
        <Route exact path='/shop' element = {<ShopePage />} />
      </Routes>
    
    </div>
  
  );
}

export default App;
