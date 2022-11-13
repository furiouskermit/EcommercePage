
import Count from "./Count"
import cart from "./images/icon-cart.svg"
import thumb1 from "./images/image-product-1-thumbnail.jpg"
import thumb2 from "./images/image-product-2-thumbnail.jpg"
import thumb3 from "./images/image-product-3-thumbnail.jpg"
import thumb4 from "./images/image-product-4-thumbnail.jpg"

function Main() {
  const imgAlt  = (index) => {
    return `img${index}`
  }



  const onclick = (event) => {
    const thisImg = event.target.alt;
    const bigImg = document.querySelectorAll(".thumb-big img");
    const buttons = document.querySelectorAll(".thumb-small button");
    // console.dir(event.target)
    for(var i=0; i<bigImg.length; i++) {
      if(thisImg === bigImg[i].alt) {
        bigImg[i].classList.remove("d-none")
      } else {
        bigImg[i].classList.add("d-none")
      }
    }

    for(var i=0; i<buttons.length; i++) {
      const buttonAlt = buttons[i].childNodes[0].alt;
      if(thisImg === buttonAlt) {
        buttons[i].classList.add("active")
      } else {
        buttons[i].classList.remove("active")
      }
    }
  }

  return (
    <section className="main">
      <div className="inner">
        <div className="main-left">
          <div className="thumb-big">
            <img 
            src={require('./images/image-product-1.jpg')}
            alt={imgAlt(1)} />
            <img
            className='d-none' 
            src={require('./images/image-product-2.jpg')}
            alt={imgAlt(2)} />
            <img 
            className='d-none' 
            src={require('./images/image-product-3.jpg')}
            alt={imgAlt(3)} />
            <img 
            className='d-none' 
            src={require('./images/image-product-4.jpg')}
            alt={imgAlt(4)} />
          </div>
          <div className="thumb-small">
            <button className="active" onClick={onclick}><img src={thumb1} alt={imgAlt(1)} /></button>
            <button onClick={onclick}><img src={thumb2} alt={imgAlt(2)} /></button>
            <button onClick={onclick}><img src={thumb3} alt={imgAlt(3)} /></button>
            <button onClick={onclick}><img src={thumb4} alt={imgAlt(4)} /></button>
          </div>
        </div>
        <div className="main-right">
          <h2 className='prd-title'>
            <span>SNEAKER COMPANY</span>
            Fall Limited Edition Sneakers
          </h2>
          <p className='prd-desc'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>
          <div className='prd-price'>
            <div className='prd-sale'>
              <strong>$125.00</strong>
              <span className='prd-discount'>50%</span>
            </div>
            <div className='prd-original'><strike>$250.00</strike></div>
          </div>
          <div className='prd-button'>
            <Count />
            <button className='addCart'><img src={cart} /> Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main;