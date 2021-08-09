import * as React from "react"
import lobstr from "../images/lobstr.png"
import kpmg from "../images/kpmg.png"
import stellarteam from "../images/stellartm.png"
import stellar from "../images/stellar.png"
import coinlist from "../images/coinlist.png"
import litemint from "../images/litemint.png"
import scopuly from "../images/scopuly.png"
 

const Partners = () => {
  return (
      <div className="partners-container">
          <h2 className="partners-heading">Our partners</h2>
          <a href="https://www.stellar.org/">
              <img src={stellar} alt="stellar" />
          </a>
          <a href="https://lobstr.co/home/">
              <img src={lobstr} alt="lobstr" />
          </a>
          <a href="https://scopuly.com/">
              <img src={scopuly} alt="scopuly" />
          </a>
          <a href="https://stellarterm.com/">
              <img src={stellarteam} alt="stellarteam" />
          </a>
          <a href="https://coinlist.co/">
              <img src={coinlist} alt="coinlist" />
          </a>
          <a href="https://litemint.com/">
              <img src={litemint} alt="litemint" />
          </a>
          <a href="https://home.kpmg/xx/en/home.html">
              <img src={kpmg} alt="kpmg"/>
          </a>
      </div>
  )
}

export default Partners