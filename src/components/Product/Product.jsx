import React from 'react';
import './Product.css'

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            impressions: 0
        }
    }

    handleHover = () => {
        this.setState({
            impressions: this.state.impressions + 1
        })
    }

    render(){

        return (
            <article className="container" onMouseOut={this.handleHover}>
                <section className="row" style={{ color: this.props.hidden ? '#9E9E9E' : 'initial' }}>
                    <div className="col-md-9">
                        <div className="row">
                        <div className="col-md-4" id="product-img">
                        
                            <img src={require('../../assets/img/iphone.jpg')} width="200" class="rounded float-left" alt="item" />
                        </div>
                        <div className="col-md-8" id="product-details">
                            <h4> {this.props.title} </h4>
                            <aside>
                                <p className="text-right">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                
                                </p>
                            </aside>

                            <span className="text-sm">{this.props.owner}, <a href="https://www.google.com/">{this.props.location}</a></span>

                            
                            <br />
                            <p className="w-100 text-center"> 
        
                            <i class="far fa-eye"></i><sup><b>{this.state.impressions}</b></sup>
                            <i class="ml-4 far fa-heart"></i><sup><b>0</b></sup>
                            </p>
                        </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <h6 className="price-heading"><small>R</small>{this.props.price}<sup>00</sup></h6>
                        <button className="btn btn-primary" onClick={() => this.props.onclick(this.props.id)}>Add to cart</button>
                    </div>
                </section>
            </article>
        )
    }
}

export default Product;