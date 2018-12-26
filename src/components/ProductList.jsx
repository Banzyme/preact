import React, { Component } from 'react';
import Product from './Product';

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
                                id={item.id}
                                owner={item.owner}
                                title={item.title}
                                hidden={item.hidden}
                                price={item.price}
                                location={item.location}
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