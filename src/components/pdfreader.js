import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pdf from "../img/pdf.png";
import box from "../img/box.png";
import resume from "../resume.pdf";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Draggable from "react-draggable";
export default function pdfreader(props) {
  let sSize = props.screenSize;
  if (sSize === "" || sSize === null || sSize === undefined) {
    sSize = "box semi";
  }

  return (
    <>
      <Draggable handle="#titleBar">
        <div className={sSize}>
          <div className="topbar mx-2" style={{}}>
            <Row>
              <Col>
                <div id="titleBar" className="mx-2">
                  <img
                    style={{ float: "left", marginTop: "2px" }}
                    src={Pdf}
                    width="18px"
                  />
                  <p
                    style={{
                      display: "inline",
                      marginLeft: "4px",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontFamily: "Segoe UI",
                    }}
                  >
                    Resume - Adobe Acrobat Reader
                  </p>
                </div>
              </Col>
              <Col style={{ padding: "0px", margin: "0px" }}>
                <span style={{ position: "fixed", right: "00px" }}>
                  <span
                    className="sidebtn"
                    style={{
                      textAlign: "center",
                      padding: "3px 15px",
                      fontSize: "12px",
                    }}
                  >
                    —
                  </span>
                  <span
                    className="btn"
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#000",
                      display: "inline",
                    }}
                    onClick={props.sSizefn}
                  >
                    <span
                      className="sidebtn"
                      style={{ textAlign: "center", padding: "3px 15px" }}
                    >
                      <img src={box} width="15px" />
                    </span>
                  </span>
                  <span
                    className="btn"
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#000",
                      display: "inline",
                    }}
                  >
                    <span
                      className="closebtn"
                      onClick={() => {
                        props.exit();
                      }}
                      style={{ textAlign: "center", padding: "3px 15px" }}
                    >
                      x
                    </span>
                  </span>
                </span>
              </Col>
            </Row>
          </div>

          <iframe
            src={resume}
            style={{
              position: "fixed",
              top: "25px",
              width: "100%",
              height: "calc(100% - 25px)",
              padding: "2px",
            }}
          />
        </div>
      </Draggable>
    </>
  );
}
