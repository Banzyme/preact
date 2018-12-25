import React from 'react';
import Product from './Product';
import { seed } from '../seed';

const products = seed;
const handleClick = (id) => {
    alert("Item: " + id + " added to cart.");
}

const items = products.map((item) => {
    return <li className="list-item shadow-md" key="item.id">
        <Product
            id={item.id}
            owner={item.owner}
            title={item.title}
            hidden={item.hidden}
            price={item.price}
            location={item.location} 
            onclick = {handleClick}
            />
    </li>
});

const ProductList = () => {

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

export default ProductList;