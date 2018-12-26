import React from 'react'

const CartItem = ({title, price, id}) =>{
    return ( 
    <div>
        <li className="list-group-item">{title}</li>
    </div>
    )
}

export default CartItem;