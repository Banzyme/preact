import React from 'react';

const Product = ({owner, title, hidden}) =>{
    return(
        <article>
            <h6> {title} </h6>
            <span className="text-sm">{owner}</span>
        </article>
        )
}

export default Product;