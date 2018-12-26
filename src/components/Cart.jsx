import React from 'react';

const Cart = ({children}) => {
    return (
    <article className='navbar'>
        <nav className="navbar navbar-light">
            <span className="navbar-brand mb-0 h1">{ children }</span>
        </nav>
    </article>
    )
}
    
export default Cart;