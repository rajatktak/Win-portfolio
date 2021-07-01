import React from "react";
import search from "../img/search.png";
import word from "../img/word.png";
import pdf from "../img/pdf.png";
import excel from "../img/excel.png";
import vs from "../img/vs.png";
import linkedin from "../img/linkedin.png";
import yourphone from "../img/yourphone.png";
import { Container, Row, Col } from "react-bootstrap";
import setting from "../img/setting.png";
import cal from "../img/cal.png";
import photo from "../img/photo.png";
import one from "../img/one.png";
import store from "../img/store.png";
import powerpoint from "../img/powerpoint.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CssStyle from "./style.model.css";
export default function startmenuitem(props) {
  let resume = "resume";

  return (
    <>
      <div className="my-4 mx-4">
        <Container>
          <Row>
            <div
              className=" "
              style={{
                height: "35px",
                background: "#fff",
                marginBottom: "8px",
                borderRadius: "5px",
                borderBottom: "3px solid #69a1d7",
              }}
            >
              <img
                className="my-2"
                style={{ display: "inline", float: "left" }}
                src={search}
                width="15px"
              />
              <p className="my-1 mx-4" style={{ color: "#777" }}>
                Type here to search
              </p>
            </div>
          </Row>
          <Row>
            <Col>
              <h6
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  fontWeight: "bolder",
                }}
              >
                Pinned
              </h6>
            </Col>
          </Row>
          <Row>
            <Col inline className="startItem">
              <center>
                <img src={pdf} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Adobe Reader</p>
              </center>
            </Col>
            <Col inline className="startItem">
              <center>
                <img src={word} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Word</p>
              </center>
            </Col>
            <Col inline className="startItem">
              <center>
                <img src={excel} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Excel</p>
              </center>
            </Col>{" "}
            <Col inline className="startItem">
              <center>
                <img src={vs} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>VS code</p>
              </center>
            </Col>{" "}
            <Col inline className="startItem">
              <center>
                <img src={yourphone} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Your Phone</p>
              </center>
            </Col>
            <Col inline className="startItem">
              <center>
                <img src={linkedin} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Linked In</p>
              </center>
            </Col>
          </Row>
          <Row>
            <Col inline className="startItem">
              <center>
                <img src={setting} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Setting</p>
              </center>
            </Col>
            <Col inline className="startItem">
              <center>
                <img src={cal} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Calculator</p>
              </center>
            </Col>
            <Col inline className="startItem">
              <center>
                <img src={photo} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Photos</p>
              </center>
            </Col>{" "}
            <Col inline className="startItem">
              <center>
                <img src={one} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>OneNote</p>
              </center>
            </Col>{" "}
            <Col inline className="startItem">
              <center>
                <img src={store} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>Store</p>
              </center>
            </Col>
            <Col inline className="startItem">
              <center>
                <img src={powerpoint} width="35px" />
                <p style={{ color: "#777", fontSize: "8px" }}>PowerPoint</p>
              </center>
            </Col>
          </Row>
          {/* 
              
              
              
              */}
          <Row>
            <Col>
              <h6
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "12px",
                  fontWeight: "bolder",
                }}
              >
                Recommended
              </h6>
            </Col>
          </Row>
          <Row>
            <Col inline>
              <Row>
                {/* style={{background:"transparent",border:"none"}} */}
                <div
                  className="startItem"
                  onClick={() => {
                    props.fn(resume);
                  }}
                >
                  <Col className={CssStyle.btn}>
                    <img
                      style={{ float: "left", marginRight: "8px" }}
                      src={pdf}
                      width="35px"
                    />
                  </Col>
                  <Col style={{ padding: "3px 0px" }}>
                    <p
                      style={{
                        textAlign: "left",

                        color: "#777",
                        fontSize: "11px",
                      }}
                    >
                      Resume.pdf
                      <div style={{ fontSize: "8px", paddingLeft: "3px" }}>
                        17m ago
                      </div>
                    </p>
                  </Col>
                </div>
              </Row>
            </Col>

            <Col inline>
              <Row>
                <Col style={{ padding: "3px" }}>
                  <img style={{ float: "right" }} src={linkedin} width="35px" />
                </Col>
                <Col style={{ padding: "3px 0px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      padding: "0px",
                      color: "#777",
                      fontSize: "11px",
                    }}
                  >
                    Linked In
                    <div style={{ fontSize: "8px", paddingLeft: "3px" }}>
                      25m ago
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col inline>
              <Row>
                <Col style={{ padding: "3px" }}>
                  <img style={{ float: "right" }} src={pdf} width="35px" />
                </Col>
                <Col style={{ padding: "3px 0px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      padding: "0px",
                      color: "#777",
                      fontSize: "11px",
                    }}
                  >
                    Experience.pdf
                    <div style={{ fontSize: "8px", paddingLeft: "3px" }}>
                      28m ago
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* 
          
          
          */}
          <Row className="my-3">
            <Col inline>
              <Row>
                <Col style={{ padding: "3px" }}>
                  <img style={{ float: "right" }} src={pdf} width="35px" />
                </Col>
                <Col style={{ padding: "3px 0px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      padding: "0px",
                      color: "#777",
                      fontSize: "11px",
                    }}
                  >
                    Resume.pdf
                    <div style={{ fontSize: "8px", paddingLeft: "3px" }}>
                      17m ago
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col inline>
              <Row>
                <Col style={{ padding: "3px" }}>
                  <img style={{ float: "right" }} src={linkedin} width="35px" />
                </Col>
                <Col style={{ padding: "3px 0px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      padding: "0px",
                      color: "#777",
                      fontSize: "11px",
                    }}
                  >
                    Linked In
                    <div style={{ fontSize: "8px", paddingLeft: "3px" }}>
                      25m ago
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col inline>
              <Row>
                <Col style={{ padding: "3px" }}>
                  <img style={{ float: "right" }} src={pdf} width="35px" />
                </Col>
                <Col style={{ padding: "3px 0px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      padding: "0px",
                      color: "#777",
                      fontSize: "11px",
                    }}
                  >
                    Experience.pdf
                    <div style={{ fontSize: "8px", paddingLeft: "3px" }}>
                      28m ago
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </>
  );
}
