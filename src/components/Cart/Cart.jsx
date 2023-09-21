import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import AppContext from '../../context/AppContext';
import formartCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  // var result = 0;
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} /> )}
      </div>

      <div className="cart-resume">
        {/*  { formartCurrency(cartItems.map((cartItem) => result = cartItem.price + result).slice(-1), 'BRL')} */}
      
        {formartCurrency(totalPrice, 'BRL')}
      
      </div>
    </section>
  );
}
export default Cart;
