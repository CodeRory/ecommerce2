import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SearchAppBar from './components/header/header';
import SecondNav from './components/secondNav/secondNav';
import Slider from './components/slider/slider';

import Navbar from './components/cards/Navbar';
import ProductList from './components/cards/ProductList';
import Details from './components/cards/Details';
import Cart from './components/cards/cart/Cart';
import Default from './components/cards/Default';
import Modal from './components/cards/Modal';



function App() {
  return (
    <div className="App">
      <div className='allComponents'>
        <header className="App-header">
          <SearchAppBar />
        </header>
        <div>
          <SecondNav />
        </div>
        <div>
          <Slider />
        </div>
        <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
         
        </div>
      </div>
    </div>
  );
}

export default App;
