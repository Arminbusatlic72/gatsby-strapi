import React from "react"
import { Player, ControlBar } from "video-react"
import Src from "../../video/IncapVideo.mp4"

const CatalystVideo = props => {
  return (
    <Player autoPlay loop muted preloaded="auto" src={Src}>
      <ControlBar
        autoHide={true}
        disableDefaultControls={true}
        className="my-class"
      />
    </Player>
  )
}
export default CatalystVideo
