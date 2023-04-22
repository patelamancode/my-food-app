import React from 'react';
import './CartItemCard.css'

const CartItemCard = ({id, image, name, description, price, delivery_time}) => {
  return (
    <div className='card-container' key={id} >
      <img src={image} alt={name} />
      <div className='item-details'>
        <p><b>Name :</b>{name}</p>
        <p><b>Description :</b>{description}</p>
        <p>Price : {price}</p>
        <p>Delivery time : {delivery_time}</p>
      </div>
    </div>
  )
}

export default CartItemCard
