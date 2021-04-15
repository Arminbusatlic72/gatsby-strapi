import React from "react"
import Src from "./InCap.mp4"

const Hero = props => {
  return (
    <>
      <div className="main-heading">
        <div className="main-heading__wrapper">
          <h1>Global knowledge fund</h1>
          <h2>
            Sharing valiable knowledge to effect systemic, positive social
            change
          </h2>
        </div>
      </div>
      <div className="video__wrapper">
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
