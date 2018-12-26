import React, {Component} from 'react';
import CartItem from './CartItem'

class CartList extends Component{

    render(){
        let price = 0;
        const purchasedProducts  = this.props.products.map((item)=>{
            price = price + item.price;
            return <CartItem title={item.title} price={item.price} id={item.id}></CartItem>
        });

        console.log("Purchased: " ,this.props.products)
        return(
            <div className="container-fluid">
            <section className="list-container">
                <ul className="list-group list-group-flush">
                    {purchasedProducts}
                </ul>
            </section>
           
            <section id="footer-content">
            
                <div className="row">
                    <h5>Total: <em>R {price}</em></h5>
                    <button className="btn btn-outline-purple w-100">Checkout</button>
                </div>
            </section>
            </div>
        )
    }
}

export default CartList;
