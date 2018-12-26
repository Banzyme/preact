import React from 'react'

const CartItem = ({title, price, id}) =>{
    return ( 
        <div className="w-100">
        <li key={id} className="list-group-item d-flex justify-content-between align-items-center">{title}
        <span class="badge badge-primary badge-pill">{price}</span>
        </li>
        
        </div>
    )
}

export default CartItem;