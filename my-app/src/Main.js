
import Count from "./Count"
import Gallery from "./gallery/Gallery"
import cart from "./images/icon-cart.svg"

function Main() {
  return (
    <section className="main">
      <div className="inner">
        <Gallery />
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