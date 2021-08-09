import * as React from "react";
import telegram from "../images/telegram.png";
import email from "../images/email.png";
import twitter from "../images/twitter.png"
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <div className="footer clearfix">
            <div className="left-column">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                </div>
                <span>© 2021 Stellarity Org. All rights reserved.</span>
                <div>
                    <span>11 W </span>
                    <span>25th St New York </span>
                    <span>NY 10010 USA</span>
                </div>
                
                <ul>
                    <li><a href="#"><img src={telegram} alt="telegram" /></a></li>
                    <li><a href="https://twitter.com/Stellarity_"><img src={twitter} alt="twitter" /></a></li>
                </ul>
            </div>
             
        </div>
    )
}

export default Footer