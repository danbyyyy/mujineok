import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';

import animationData from '../images/partners.json';
 

const Partners = () => {
    let animationContainer = createRef();
    let anim = null;

    useEffect(() => { 
        anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData
    });
        return () => anim.destroy(); // optional clean up for unmounting
    }, []);
  return (
      <div className="partners-container">
          <h2 className="partners-heading">Our partners</h2>
          <div ref={animationContainer}></div>
      </div>
  )
}

export default Partners