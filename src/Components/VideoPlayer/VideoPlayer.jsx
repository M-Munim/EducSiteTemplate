import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
setPlayState(false)
    }
  }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      {/* <video src="" autoPlay muted controls></video> */}
      <iframe src="https://www.youtube.com/embed/7rAeOw_9DcA?list=RD7rAeOw_9DcA" title="Chal Chaliye | Coke Studio Pakistan | Season 15 | Sajjad Ali x Farheen Raza Jaffry" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPlayer