import React, { Component } from 'react';
import Product from './Product';
import { seed } from '../seed';


class ProductList extends Component {
    state = {
        products: []
    }

    componentWillMount() {
        this.setState({
            products: seed
        })
    }

    // event handlers
    handleClick = (id) => {
        // toggle hidden state when clicked
        const newState = this.state.products.map(product => {
            if (product.id == id) {
                return Object.assign({}, product, {
                    hidden: !product.hidden
                })
            } else {
                return product;
            }
        });
        // Update state
        this.setState({
            products: newState
        })

        // Todo: Add to cart
    }




    render() {
        const items = this.state.products.map((item) => {
            return <li className="list-item shadow-md" key="item.id">
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
        });

        return (
            <article className="productList">
                <section id="items-container">
                    <ul className="list-container">
                        {items}
                    </ul>
                </section>
            </article>
        )
    }



}

export default ProductList;