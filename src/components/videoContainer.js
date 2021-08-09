import * as React from "react"
import video from "../images/video.mp4"

const VideoContainer = () => {
  return (
     <div className="container-video theme-columns" id="documentation">
         <div className="left-column">
         <video width="100%" height="300" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
         </div>
         <div className="right-column">
         <div className="haedings-container">
            <h2>Why Stellar Blockchain?</h2>
            <p>
                If you watched the video you should know now in brief what is Stellar blockchain, let’s have a quick rundown of the features that matter: 
                
            </p>
            <ul>
                    <li>The Stellar database is decentralized and open-source – the leading traits of a true blockchain platform.</li>
                    <li>The transaction confirmation time is 3 – 5 seconds, facilitated by its consensus mechanism. </li>
                    <li>It can support thousands of transactions per second.</li>
                    <li>It enables Multi-signatures and Smart Contracts.</li>
                    <li>It has a 1% fixed annual inflation.</li>
                </ul>
        </div>
        </div>
     </div>
  )
}

export default VideoContainer