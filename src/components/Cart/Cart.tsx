import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cartSlice';
import { RootState, AppDispatch } from '../../redux/store';
import './Cart.css';

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal; 

  return (
    <div className="cartContainer">
      <div className="cartHeader">Carrinho</div>
      {items.length === 0 ? (
        <div className="emptyCartMessage">Seu carrinho está vazio</div>
      ) : (
        <>
        <ul className="itemList">
        {items.map(item => (
          <li key={item.id} className="item">
            <div className="itemDetails">
              <span>{item.name}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div className="quantityControls">
              <button onClick={() => dispatch(removeItem({ id: item.id }))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cartFooter">
        <div className="subTotal">
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </div>
      </>
        
      )}
      
    </div>
  );
};

export default Cart;
