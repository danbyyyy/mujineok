import * as React from "react"
import Header from "../components/header"
import Masthead from "../components/masthead"
import VideoContainer from "../components/videoContainer"
import Partners from "../components/partners"
import NewSlider from "../components/newSlider"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Lottie from "../components/Lottie"
import "../css/style.css"
import "../css/fontawesome.min.css"
import "../css/animate.css"


// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Masthead />
      <VideoContainer />
      <NewSlider />
      <Lottie />
      <Partners />
      <Contact />
      <Footer />
      
    </>
  )
}

export default IndexPage
