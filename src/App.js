import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import Product from './components/Products'

export class App extends Component {
  constructor(){
    super()
    this.state={
      products:data.products,
      price:'',
      sort:''
    }
  }
  render() {
    return (
      <div className="grid-container">
       <header>
         <a href="/">React Shopping Cart</a>
       </header>
              <div className="content">
                  <div className="main">
                    <Product products={this.state.products}/>
                  </div>
                  <div className="sidebar">this is sidebar</div>
              </div>
            <footer>All right is reserve</footer>
      </div>
    );
  }
}

export default App
