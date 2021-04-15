import React from "react"
import { Player, ControlBar } from "video-react"

const CatalystVideo = props => {
  return (
    <Player
      autoPlay
      loop
      muted
      preloaded="auto"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <ControlBar
        autoHide={true}
        disableDefaultControls={true}
        className="my-class"
      />
    </Player>
  )
}
export default CatalystVideo
