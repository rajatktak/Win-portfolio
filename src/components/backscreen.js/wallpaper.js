import React from "react";
import video from "../../img/video.webm";
import StartAudio from "../../img/start.mp3";
export default function wallpaper() {
  return (
    <div style={{}}>
      <audio autoPlay="true" style={{ display: "none" }}>
        <source src={StartAudio} type="audio/mpeg" />
      </audio>
      <video
        autoPlay="true"
        muted
        style={{
          position: "fixed",
          top: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
          backgroundImage:
            "radial-gradient(#f5f5f5, rgb(175,197,213), rgb(136,175,203))",
        }}
      >
        <source src={video} type="video/webm" />
      </video>
    </div>
  );
}
