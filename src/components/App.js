import React, { Component } from 'react';
import { seed } from '../seed';

import NavBar from './Nav/NavBar';
import NewProductForm from './Forms/NewProductForm';
import CartList from './Cart/CartList'
import ProductList from './Product/ProductList';
import Footer from './Footer/Footer';
// styles
import './App.css';

class App extends Component {
  state = {
    products: []
  }

  componentWillMount() {
    this.setState({
      products: seed
    })
  }

  addNewProduct = (product) =>{
    const newState = this.state.products.concat( [product] );

    this.setState({
        products: newState
    });
  }


  // event handlers
  handleClick = (id) => {
    // toggle hidden state when clicked
    const newState = this.state.products.map(product => {
      if (product.id === id) {
        return Object.assign({}, product, {
          hidden: !product.hidden,
          impressions: product.impressions + 1
        })
      } else {
        return product;
      }
    });
    // Update state
    this.setState({
      products: newState
    })
  }

  render() {
    return (
      <div className="App">
      <article className="header">
        <NavBar>Preact</NavBar>
      </article>
        
        <article className="container-fluid">
        <div className="row">
              <section className="side col-lg-3">
              <h4 className="heading">Sell your product</h4>
        
              <hr />
              <NewProductForm onAddProduct={this.addNewProduct}/>

              <div className="rounded shadow-lg">
                <CartList 
                products={ this.state.products.filter( (product)=> 
                  product.hidden === true ) }
                />
              </div>
            </section>
            <section className="content col-lg-9">
              <h4 className="display-4 mb-2 ml-5">Featured</h4>
              
              <ProductList onclick={this.handleClick} products={this.state}/>
            </section>
          </div>
        </article>
        
        <article className="footer">
          <Footer/>
        </article>
      </div>
    );
  }
}

export default App;
