import React from 'react';
import { useState } from 'react';

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            impressions: 0
        }
        // todo
    }

    handleHover = () => {
        this.setState({
            impressions: this.state.impressions + 1
        })
    }

    handleClick = () => {
        this.props.onclick(this.props.id);
    }

    render(){
        const data = this.props; 
        console.log("Prouct props: ", data)

        return (
            <article className="container" onMouseOut={this.handleHover} onClick={this.handleClick}>
                <section className="row" style={{ color: this.props.hidden ? '#616161' : 'initial' }}>
                    <div className="col-md-9">
                        <h4> {this.props.title} </h4>
                        <span className="text-sm">{this.props.owner}, <a>{this.props.location}</a></span>
                        <br/>
                        <p className="w-100 text-center">viewed <b>{this.state.impressions}</b> times</p>
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