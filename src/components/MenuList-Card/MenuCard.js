import React, { useContext } from 'react';
import './MenuCard.css';
import { FoodDataContext } from '../../contex/DataContext';

const MenuCard = ({foodItem, selectedItemToCart}) => {

  const {cartItem} = useContext(FoodDataContext);
  const {id, image, name, description, price, delivery_time} = foodItem;
  
  const check = cartItem.find((item) => item.id===id)



  return (
    <div className='card-container' key={id} >
      <img src={image} alt={name} />
      <div className='item-details'>
        <p><b>Name :</b>{name}</p>
        <p><b>Description :</b>{description}</p>
        <p>Price : {price}</p>
        <p>Delivery time : {delivery_time}</p>
        <div className='btn-container'>
            <button disabled={check} onClick={()=>selectedItemToCart(id)}>{check ? 'Go to cart' : 'Add'}</button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
