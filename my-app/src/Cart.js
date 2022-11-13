import {useState} from 'react';
import cart from './images/icon-cart.svg';

function Cart() {
  const [toggle, setToggle] = useState(false);

  const user = {
    firstName: '현제',
    lastName: '성'
  }
  function name(user) {
    return user.lastName + user.firstName;
  }

  const onclick = () => {
    setToggle(prev => !prev);
  }

  return (
    <button className='cart' aria-expanded={toggle} onClick={onclick}>
      <img src={cart} />
      <div className={!toggle ? "d-none" : "cartModal"}>
        <h3>Cart</h3>
        <div className='cart-content'>
          <div className='test'>hello, {name(user)}</div>
          <p className='cartEmpty'>Your cart is empty.</p>
        </div>
      </div>
    </button>
  )
}
export default Cart;