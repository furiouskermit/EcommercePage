import {useState} from 'react';
import cart from './images/icon-cart.svg';

function Cart() {
  const [toggle, setToggle] = useState(false);

  const onclick = () => {
    setToggle(prev => !prev);
  }

  const isEmpty = () => {
    const list = document.querySelector(".cart-list");
    let empty;
    if(list != null) {
      if(list.hasChildNodes()) {
        empty = false;
      } else {
        empty = true;
      }
    }
    return empty;
  }

  return (
    <div className='cartWrap'>
      <button className='cart' aria-expanded={toggle} onClick={onclick}><img src={cart} /></button>
      <div className={!toggle ? "d-none" : "cartModal"}>
        <h3>Cart</h3>
        <div className='cart-content'>
          <p className={isEmpty()?"cart-empty":"d-none"}>Your cart is empty.</p>
          <div className='cart-list'></div>
          <button className="btnCheckout d-none">Checkout</button>
        </div>
      </div>
    </div>
  )
}
export default Cart;