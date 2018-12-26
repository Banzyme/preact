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
            <article className="container" onMouseOut={this.handleHover} onClick={() => this.props.onclick(this.props.id)}>
                <section className="row" style={{ color: this.props.hidden ? '#9E9E9E' : 'initial' }}>
                    <div className="col-md-9">
                        <div className="container">
                        <div className="col-md-4 bg-light" id="product-img">
                        ll
                            <img src="/../../assets/img/iphone.jpg" class="rounded float-left" alt="item" />
                        </div>
                        <div className="col-md-8 bg-dark" id="product-details">
                            <h4> {this.props.title} </h4>
                            <span className="text-sm">{this.props.owner}, <a href="https://www.google.com/">{this.props.location}</a></span>

                            <div className="mx-auto w-75 small-content-divider my-4"><hr /></div>
                            <br />
                            <p className="w-100 text-center"> <small>viewed <b>{this.state.impressions}</b> times</small></p>
                        </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <h6 className="display-4"><small>R</small>{this.props.price}<sup>00</sup></h6>
                    </div>
                </section>
            </article>
        )
    }
}

export default Product;