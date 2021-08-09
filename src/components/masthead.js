import * as React from "react"
import coins from "../images/coins.jpg"

const Masthead = () => {
  return (
    <article>
	    <div className="post-content">
            <header className="theme-hero-title is-style-center-screenshot alignfull">
                <div className="theme-hero-title__inner">
                <div className="theme-columns is-vertical-center">
                    <div className="theme-column theme-columns__column">
                        <div className="theme-hero-title-content theme-hero-title__content">
                            <h1 className="theme-hero-title__title">In Stellar We Trust.</h1>
                            <p>The average person on the internet sees over 100 ads on a daily basis. And while the big companies earn a ton of money, you earn little to nothing. Don't worry, that ends today. 
                            The new stellarity token is a global, decentralized new generation cryptocurrency which is guaranteed to have a steady and legitimate exchange rate due to money and escrow model received from our partners and investors. 
                            Don't waste anymore time, and join our community!</p>
                            <div className="theme-buttons alignleft">
                                <a className="theme-button has-turquoise-color" href="#documentation">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masthead-image">
                    <img src={coins} alt="coins" />
                </div>
            </header>
        </div>
    </article>
  )
}

export default Masthead