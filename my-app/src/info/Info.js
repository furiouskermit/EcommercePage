import Count from "../Count"
import prd from "../temp/prd"
import cart from "../images/icon-cart.svg"
import {useState} from 'react'

function Info() {
  const [data, setData] = useState(prd);
  const [current, setCurrent] = useState(data[0])

  const onClick = () => {
    //createElement해서 append하는수밖에,,
    const cartEmpty = document.querySelector(".cart-empty");
    const newItem = document.createElement("div");
    const cartList = document.querySelector(".cart-list");
    newItem.classList.add("cart-item");
    newItem.setAttribute("key", prd.id)
    newItem.innerHTML = `
      <div class='cart-prd-thumb'><img src=${current.image}></div>
      <div class='cart-prd-desc'>
        <h3>${current.title}</h3>
        <p>
          <span class='cart-prd-price'>$${current.price}.00</span> x <span class='cart-prd-count'>3</span> <strong>$${current.price * 3 + ".00"}</strong>
        </p>
      </div>
      <button class='btnDel'>Del</button>
    `
    const cartItem = document.querySelectorAll(".cart-item");
    const h2 = document.querySelector(".prd-title");
    if(cartList !== null) {
      if(cartItem !== null) {
        if(cartItem.length > 0) {
          let count = 0;
          for(var i=0;i<cartItem.length;i++) {
            if(cartItem[i].key === h2.key) {
              count += 1;
            }
          }
          if(count < 1) {
            cartList.append(newItem)
            cartEmpty.classList.add("d-none")
          }
        } else {
          cartList.append(newItem)
          cartEmpty.classList.add("d-none")
        }
      }
    }
  }

  return (
    <div className="main-right">
      <h2 className='prd-title' key={current.key}>
        <span>{current.company}</span>
        {current.title}
      </h2>
      <p className='prd-desc'>
        {current.desc}
      </p>
      <div className='prd-price'>
        <div className='prd-sale'>
          <strong>${current.price}.00</strong>
          <span className='prd-discount'>50%</span>
        </div>
        <div className='prd-original'><strike>${current.original}.00</strike></div>
      </div>
      <div className='prd-button'>
        <Count />
        <button onClick={onClick} className='addCart'><img src={cart} /> Add to cart</button>
      </div>
    </div>
  )
}
export default Info;