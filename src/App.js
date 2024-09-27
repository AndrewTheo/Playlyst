import React from "react";
import "./styles.css";
import ReactPlayer from "react-player";
import Page from "./components/Page";
import AppBar from "material-ui/AppBar";
import MediaPlayer from "./components/MediaPlayer.js";
import Navbar from "react-bootstrap/Navbar";

import Player from "./components/Player.js";
class App extends React.Component {
  componentDidMount() {
    //document.body.style.backgroundColor = "#272727";
    document.body.style.backgroundColor = "#262626";
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#272727",
          height: "100%"
        }}
      >
        {/* <Navbar
          expand="lg"
          style={{
            backgroundColor: "#272727",
            color: "#66FCF1"
          }}
        >
          <ContainerBoot>
            <Navbar.Brand
              style={{
                color: "#66FCF1"
              }}
            >
              <h1>PLAYLYST.</h1>
            </Navbar.Brand>
            <Navbar.Text
              style={{
                color: "#66FCF1",
                fontSize: 5
              }}
            />
          </ContainerBoot>
        </Navbar> */}
        <Player />
      </div>
    );
  }
}

export default App;
