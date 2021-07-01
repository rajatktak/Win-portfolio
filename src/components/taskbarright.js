import React from "react";
import message from "../img/comment.png";
import volume from "../img/volume.png";
import wifi from "../img/wifi.png";
import battery from "../img/battery.png";
import arrow from "../img/arrow.png";
export default function taskbarright() {
  var d = new Date();
  var dd = String(d.getDate()).padStart(2, "0");
  var mm = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = d.getFullYear();
  let date = dd + "-" + mm + "-" + yyyy;
  let time = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
  let day = d.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      <span
        style={{
          height: "30px",

          width: "20px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
          right: "10px",
        }}
      >
        <img style={{ zIndex: "111" }} src={message} width="20px"></img>
      </span>
      <span
        style={{
          height: "34px",
          right: "35px",
          width: "80px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
        }}
      >
        <p style={{ fontSize: "9px", lineHeight: "1.2" }}>
          <center>
            <div>{time}</div> <div>{day}</div> <div> {date}</div>
          </center>
        </p>
      </span>
      <span
        style={{
          height: "30px",
          right: "90px",
          width: "80px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
        }}
      >
        <p style={{ fontSize: "15px" }}>
          <center>ENG</center>
        </p>
      </span>
      <span
        style={{
          height: "30px",
          right: "100px",
          width: "80px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
        }}
      >
        <img src={volume} width="20px" alt="volume"></img>
      </span>
      <span
        style={{
          height: "30px",
          right: "130px",
          width: "80px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
        }}
      >
        <img
          src={battery}
          style={{ transform: "rotate(90deg)" }}
          width="20px"
          alt="battery"
        ></img>
      </span>
      <span
        style={{
          height: "30px",
          right: "160px",
          width: "80px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
        }}
      >
        <img src={wifi} width="13px" alt="Wifi"></img>
      </span>
      <span
        style={{
          height: "30px",
          right: "190px",
          width: "80px",
          position: "fixed",
          zIndex: "111",
          bottom: "0",
        }}
      >
        <img src={arrow} width="12px" alt="more options"></img>
      </span>
    </>
  );
}
