import React from "react";
import backGround from "../img/lockscreen.png";
import { motion } from "framer-motion";
import Right from "../img/right.png";
export default function lockScreen(props) {
  let d = new Date();
  let time = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");

  return (
    <motion.div
      className={props.addClass}
      style={{ zIndex: "1111111111111111" }}
    >
      
      <img
        src={backGround}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          bottom: "0",
          zIndex: "1111111111111111",
        }}
      />
      <p
        className="text-center"
        style={{
          position: "fixed",
          top: "5vh",
          color: "#fff",
          fontSize: "8em",
          fontWeight: "lighter",
          width: "100vw",
          zIndex: "1111111111111111",
        }}
      >
        {time}
      </p>
      <button
        onClick={() => {
          props.click0();
          props.click2();
          props.click();
        }}
        className="text-center"
        style={{
          position: "fixed",
          top: "70vh",
          background: "transparent",
          width: "100vw",
          zIndex: "1111111111111111",
          border: "none",
        }}
      >
        <img src={Right} width="80px" />
      </button>
    </motion.div>
  );
}
