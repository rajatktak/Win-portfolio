import Taskbar from "./components/taskbar/taskbar";
import "./App.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import LockScreen from "../src/components/lockScreen";
import React, { useState } from "react";
import StartMenu from "./components/startmenu";
import Pdfreader from "./components/pdfreader";
import VideoWallpaper from "./components/backscreen.js/wallpaper";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const handle = useFullScreenHandle();
  const [result, setResult] = useState("");
  let abc;
  let addClass;
  const [lockClass, setLockClass] = useState("");
  let lockScreenAnimation = () => {
    setLockClass("lockClass");
    console.log(lockClass);
  };
  const [screenSize, setScreenSize] = useState("semi");
  const sSizefn = () => {
    let size = screenSize;

    if (size === "semi") {
      setScreenSize("box full");
    } else {
      setScreenSize("semi");
    }
    console.log(screenSize + " App.js screensize");
  };

  let exit = () => {
    setScreenSize("exit");
    // console.log(sSize + "aaaa");
  };
  let sSize = screenSize;

  const fn = (fns) => {
    setScreenSize("semi");
    setResult(fns);
  };

  const [toggleStart, setToggleStart] = useState("");
  const toggleStartMenu = () => {
    let value = toggleStart;
    if (value === "animate-bottom") {
      setToggleStart("animate-bottom-reverse");
    } else {
      setToggleStart("animate-bottom");
    }
  };

  let final = toggleStart;
  const [start, setStart] = useState(false);
  let enter = () => {
    setTimeout(() => setStart(true), 500);
  };
  return (
    <div className="App">
      {/* <button onClick={handle.enter}>Enter fullscreen</button> */}
      <FullScreen handle={handle}>
        <Router>
          <AnimatePresence>
            {start === true ? (
              <>
                {" "}
                <VideoWallpaper />{" "}
                <Switch>
                  <Route exact path="/startmenu">
                    <StartMenu
                      toggleStart={final}
                      run={toggleStartMenu}
                      fn={fn}
                    />
                  </Route>
                  {/* <Route exact path="/pdf">
  <Pdfreader />
</Route> */}
                </Switch>
                {result == "resume" ? (
                  <Pdfreader
                    screenSize={screenSize}
                    sSizefn={sSizefn}
                    exit={exit}
                    // box={box}
                    exit={exit}
                  />
                ) : (
                  (abc = "")
                )}
                <Taskbar toggleStartMenu={toggleStartMenu} />
              </>
            ) : (
              <LockScreen
                click0={lockScreenAnimation}
                addClass={lockClass}
                click={handle.enter}
                click2={enter}
              />
            )}
          </AnimatePresence>
        </Router>
      </FullScreen>
    </div>
  );
}

export default App;
