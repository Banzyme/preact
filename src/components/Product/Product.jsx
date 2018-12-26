import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';
import thumbnailDefault from '../../assets/img/iphone.jpg';


function Product(props){
    
    return (
        <article className="container">
            <section className="row" style={{ color: props.hidden ? '#9E9E9E' : 'initial' }}>
                <div className="col-md-9">
                    <div className="row">
                    <div className="col-md-4" id="product-img">
                    
                        <img src={thumbnailDefault} class="rounded float-left" alt="item" />
                    </div>
                    <div className="col-md-8" id="product-details">
                        <h4> {props.title} </h4>
                        <aside>
                            <p className="text-right">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            
                            </p>
                        </aside>

                        <span className="text-sm">{props.owner}, <a href="https://www.google.com/">{props.location}</a></span>

                        
                        <br />
                        <p className="w-100 text-center"> 
    
                        <i className="far fa-eye"></i><sup><b> {props.impressions} </b></sup>
                        <i className={props.likes===0? "ml-4 far fa-heart": "ml-4 fas fa-heart" }  
                            onClick={ () => props.onlike(props.id) } >
                            </i><sup><b>{props.likes}</b></sup>
                        </p>
                    </div>
                    </div>

                </div>

                <div className="col-md-3">
                    <h6 className="price-heading"><small>R</small>{props.price}<sup>00</sup></h6>

                    <button className={props.hidden?"btn btn-danger": "btn btn-primary"} onClick={() => props.onclick(props.id) }>
                        { props.hidden? 'Remove': 'Add to cart' }
                    </button>
                </div>
            </section>
        </article>
    )
}

Product.PropTypes = {
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    impressions: PropTypes.number.isRequired,
    imgPath: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired
  };


export default Product;