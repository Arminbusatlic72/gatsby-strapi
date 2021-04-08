import React from "react"
import Src from "./InCap.mp4"

const Video = props => {
  return (
    <>
      <div className="main-heading__wrapper">
        <h1>Hello people</h1>
      </div>
      <div className="video__wrapper">
        <video autoPlay loop muted className="video-background">
          <source src={Src} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
export default Video
