import React from 'react';

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

    componentDidMount(){
        console.log("Product props: ", this.props.title)
    }

    render(){
        const data = this.props; 

        return (
            <article className="container" onMouseOut={this.handleHover} onClick={ () => this.props.onclick(this.props.id) }>
                <section className="row" style={{ color: this.props.hidden ? '#9E9E9E' : 'initial' }}>
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