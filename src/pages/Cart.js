import React, { useContext } from 'react'
import { FoodDataContext } from '../contex/DataContext'
import CartItemCard from '../components/CartItem-Card/CartItemCard';

const Cart = () => {
  const {cartItem} = useContext(FoodDataContext);

  const styles = {
    margin:'20px 30px',
    display:'flex',
    justifyContent:'space-around'    
  }

  const totalAmount = cartItem.reduce((acc, {price}) => acc+price ,0)
  const totalDelTime = cartItem.reduce((acc, {delivery_time}) => acc+delivery_time, 0)


  return (
    <div>
      <h1>welcome to cart</h1>
      <div style={styles}>
        {cartItem.map((item) => <CartItemCard {...item} />)}
      </div>
      <div>
        <h3>Check out section</h3>
        <div>
          <h3>Total bill : <span style={{color:'green'}}>{totalAmount}</span></h3>
          <h3>Total delivery time : <span style={{color:'green'}}>{totalDelTime} mins</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Cart
