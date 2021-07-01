import React from "react";
import Taskbaricon from "../taskbaricons";

import Taskbarright from "../taskbarright";
export default function taskbar(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "35px",
          background:
            "linear-gradient(to right, rgba(229, 238, 249,0.75) , rgba(227, 238, 249,0.9))",
          backdropFilter: "blur(9px)",
          position: "fixed",
          bottom: "0",
          zIndex: "11111",
        }}
      >
        <Taskbaricon toggleStartMenu={props.toggleStartMenu} />
        <Taskbarright />
      </div>
    </div>
  );
}
