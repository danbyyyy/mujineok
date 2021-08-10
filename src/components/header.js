import * as React from "react"
import logo from "../images/logo.png"

const openNav = () => {
    var x = document.getElementById("nav");
    if (x.className === "menu") {
      x.className += " is-open";
    } else {
      x.className = "menu";
    }
  }

const Header = () => {
  return (
    <header id="nav" className="menu">
        <div className="menu__inner">
        <a href="#" className="menu__logo" rel="home" >
                <img src={logo} alt="logo" />
        </a>
    
        <a href="#nav" id="nav-toggler" className="menu__nav__toggle" aria-hidden="true" onClick={openNav} >
            Navigation  
        </a>
    
        <nav className="menu__nav">
            <ul id="menu-devkinsta-header" className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Home</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#documentation">Documentation</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#our-tokens">Our tokens</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#contact-us">Contact us</a></li>
            </ul>
        </nav>
        <div className="menu__extras">  
            <a className="menu__nav__a" href="https://lobstr.co/trade/XLS:GDERYRDAOITUY44PABGDBFUPYV4DDMYQZ5O3XX4FGBYIVOCN5NRXACXJ">
                Trade        
            </a>
        </div>
        </div>
    </header>
  )
}

export default Header