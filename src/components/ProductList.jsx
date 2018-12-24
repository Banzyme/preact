import React from 'react';
import Product from './Product';

const products = [
    {
        id: 1,
        owner: "Bob",
        title: 'Selling my couch',
        price: 5421,
        hidden: false,
        location: 'Middelburg Nasaret'
    },
    {
        id: 11,
        owner: "Ndamulelo",
        price: 3900,
        title: 'Selling my Apple iPhone 7s',
        hidden: false,
        location: 'Pretoria Sunnyside'
    }
]

const items = products.map( (item) => {
    return <li  className="list-item shadow-md" key="item.id"> <Product owner={item.owner} title={item.title} hidden={item.hidden} price={item.price} location={item.location} /> </li>
});

const ProductList = () => {
    return(
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