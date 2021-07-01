import React from "react";
import User from "../img/user.png";
import { motion } from "framer-motion";
import power from "../img/power.png";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StartmenuIn from "./startmenuitem";
export default function startmenu(props) {
let toggleClass=props.toggleStart;
  if(toggleClass==="" || toggleClass===null || toggleClass===undefined){
toggleClass="animate-bottom-reverse";
  }

  return (
    <motion.div className={toggleClass}>
      <div className="startbox">
        <StartmenuIn fn={props.fn} />

        <div
          style={{
            position: "absolute",
            bottom: "0px",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            background: "rgb(214,222,239)",
            width: "100%",
            textAlign: "left",
            height: "55px",
            boxShadow: "inset 0px 2px 53px -19px rgba(0,0,0,0.18)",
          }}
        >
          <Container>
            <Row>
              <Col className="my-2">
                <img src={User} className="" width="40px" />
                <span className="mx-2">Rajat Tak </span>
              </Col>
              <Col className="my-3">
                <img align="right" src={power} width="20px" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}
