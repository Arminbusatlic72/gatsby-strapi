import React from "react"
import Src from "./InCap.mp4"

const Hero = props => {
  return (
    <>
      <div className="hero-section__wrapper">
        <div className="hero-section__title-wrapper">
          <h1 className="hero-section__title">Global knowledge fund</h1>
          <h2>
            Sharing valiable knowledge to effect systemic, positive social
            change
          </h2>
        </div>

        <video
          autoPlay
          loop
          muted
          preloaded="auto"
          className="video-background"
        >
          <source src={Src} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
export default Hero
