import React from "react";
import Start from "../img/window.png";
import Edge from "../img/edge.png";
import Search from "../img/search.png";
import VsCode from "../img/vs.png";
import Store from "../img/store.png";
import { Link } from "react-router-dom";
export default function taskbaricons(props) {
  return (
    <>
      <center>
        <div
          style={{
            background: "",
            width: "35px",
            display: "inline",
          }}
        >
          <Link to="/startmenu" onClick={props.toggleStartMenu}>
            <img style={{ margin: "10px 10px" }} src={Start} width="20px" />
          </Link>
          <img style={{ margin: "10px 10px" }} src={Search} width="20px" />
          <img style={{ margin: "10px 10px" }} src={Edge} width="20px" />
          <img style={{ margin: "10px 10px" }} src={VsCode} width="20px" />
          <img style={{ margin: "10px 10px" }} src={Store} width="20px" />
        </div>
      </center>
    </>
  );
}
