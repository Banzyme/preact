import React, {Component} from 'react';
import CartItem from './CartItem'
import './Cart.css'

class CartList extends Component{

    render(){
        let totalPrice = 0;
        const purchasedProducts  = this.props.products.map((item)=>{
            totalPrice = totalPrice + item.price;
            return <CartItem title={item.title} price={item.price} id={item.id}></CartItem>
        });

       
        return(
            <div className="container-fluid cart">
            <h2>Cart</h2>

                <section className="list-container">
                    <ul className="list-group list-group-flush">
                        {purchasedProducts}
                    </ul>
                </section>
            
                <section id="footer-content">
                
                    <div className="row p-2">
                        <h5>Total: <em>R {totalPrice}</em></h5>
                        <button className="btn btn-outline-purple w-100">Checkout</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default CartList;
