import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';

import animationData from '../images/roadMap.json';

const Lottie = () => {
  
  let animationContainer = createRef();
  let anim = null;

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData
    });

    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
 

  return (
    <div id="lottie" className="partners-container">
        <h2>Our Roadmap</h2>
        <div ref={animationContainer}></div>
    </div>  
  );
};

export default Lottie;