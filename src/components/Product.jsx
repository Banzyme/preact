import React from 'react';

const Product = ({ owner, title, hidden, price, location }) => {
    return (
        <article className="container">
            <section className="row">
                <div className="col-md-9">
                    <h4> {title} </h4>
                    <span className="text-sm">{owner}, <a>{location}</a></span>
                </div>

                <div className="col-md-3">
                    <h6 className="display-4"><small>R</small>{price}<sup>00</sup></h6>
                </div>
            </section>

        </article>
    )
}

export default Product;