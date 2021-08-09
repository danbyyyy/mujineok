import * as React from "react";
import telegram from "../images/telegram.png";
import email from "../images/email.png";
import twitter from "../images/twitter.png";

const Contact = () => {
  return (
      <div className="contact-block" id="contact-us">
          <h2 className="contacts-heading">Get in touch</h2>
          <p>Any questions? Reach out to us and we'll get back to you shortly</p>
          <ul>
              <li><img src={telegram} alt="telegram"/><span>Telegram</span></li>
              <li><a href="https://twitter.com/Stellarity_"><img src={twitter} alt="twitter"/></a><span>twitter.com/Stellarity_</span></li>
              <li><img src={email} alt="email"/><span>stellarityorg@gmail.com</span></li>
          </ul>
      </div>
  )
}

export default Contact