import React, { useContext } from 'react'
import {StoreContext} from '../../context/Storecontext'
import "./cart.css"

const Cart = () => {
  const {food_list, cartitems,removeFromCart, getTotalCartAmount} = useContext(StoreContext)
  return (
    <>
  
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index)=>{

          if(cartitems[item._id]>0){
            return(
              <div>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>{item.price * cartitems[item._id] }</p>
                <p onClick={()=>{removeFromCart(item._id)}} className='cross'>x</p>
               
              </div>
              <hr />
              </div>
              
            )
          }

        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubToal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
            
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you hav a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    

    </>
  )
}

export default Cart
