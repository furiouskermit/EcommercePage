import Cart from './Cart'
import logo from './logo.svg';
import profile from './images/shj.png';

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <div className='header-left'>
          <div className="headerLogo">
            <a href='/'><img src={logo} alt="logo" /></a>
          </div>
          <div className='headerGnb'>
            <a href="#none">Collections</a>
            <a href="#none">Men</a>
            <a href="#none">Women</a>
            <a href="#none">About</a>
            <a href="#none">Contact</a>
          </div>
        </div>
        <div className='header-right'>
          <Cart />
          <button className='profile'><img src={profile} /></button>
        </div>
      </div>
    </header>
  )
}

export default Header;