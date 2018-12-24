import React, { Component } from 'react';
import NavBar from './NavBar';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import Footer from './Footer';
// styles
import './App.css';

class App extends Component {
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
        
              <hr className="w-25 bg-danger"/>
              <NewProductForm/>
            </section>
            <section className="content col-lg-9">
              <h4 className="display-4 mb-4">Featured</h4>
              
              <ProductList/>
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
