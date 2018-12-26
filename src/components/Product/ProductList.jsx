import React, { Component } from 'react';
import Product from './Product';
import './Product.css'

class ProductList extends Component {

    handleClick = (id) =>{
        this.props.onclick(id);
    }

    render() {
        console.log("Re-rendering: ", this.props.products)

        return (
            <article className="productList">
                <section id="items-container">
                    <ul className="list-container">
                    {  
                    this.props.products.products.map((item) => {
                        return <li className="list-item shadow-md" key={item.id}>
                            <Product
                                {...item}
                                onclick={this.handleClick}
                            />
                        </li>
                    })
                }
                    </ul>
                </section>
            </article>
        )
    }



}

export default ProductList;