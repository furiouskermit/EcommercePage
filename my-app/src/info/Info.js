import Count from "../Count"
import prd from "../temp/prd"
import {useState} from 'react'

function Info() {
  const [data, setData] = useState(prd);
  const [current, setCurrent] = useState(data[0])

  const onClick = () => {
    const prdNum = Number(document.querySelector(".prd-num-input").value);
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
          <span class='cart-prd-price'>$${current.price.toFixed(2)}</span> x <span class='cart-prd-count'>${prdNum}</span> <strong class='cart-prd-total'>$${(current.price * prdNum).toFixed(2)}</strong>
        </p>
      </div>
      <button class='btnDel'><i class="uil uil-trash"></i></button>
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
            cartEmpty.classList.add("d-none")
            cartList.append(newItem)
          } else {
            if(prdNum === 0) {
              alert("No!")
            } else {
              document.querySelector(".cart-prd-count").innerText = prdNum
              document.querySelector(".cart-prd-total").innerText = `$${(current.price * prdNum).toFixed(2)}`
            }
          }
        } else {
          if(prdNum === 0) {
            alert("No!")
          } else {
            if(cartEmpty !== null) {
              cartEmpty.classList.add("d-none")
            }
            cartList.append(newItem)
          }
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
          <strong>${current.price.toFixed(2)}</strong>
          <span className='prd-discount'>50%</span>
        </div>
        <div className='prd-original'><strike>${current.original.toFixed(2)}</strike></div>
      </div>
      <div className='prd-button'>
        <Count />
        <button onClick={onClick} className='addCart'><i className="uil uil-shopping-cart-alt"></i> Add to cart</button>
      </div>
    </div>
  )
}
export default Info;