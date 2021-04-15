import React from "react"
const PageHeaderVideo = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video__wrapper">
    <iframe
      autoPlay
      loop
      muted
      className="video-background"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default PageHeaderVideo
