import React from "react";
import "../styles.css";
import Player from "./Player.js";
import ReactPlayer from "react-player";
import AppBar from "material-ui/AppBar";
import Navbar from "react-bootstrap/Navbar";
import ContainerBoot from "react-bootstrap/Container";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

class Page extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#0B0C10"
        }}
      >
        <Navbar
          expand="lg"
          style={{
            backgroundColor: "#0B0C10",
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
          </ContainerBoot>
        </Navbar>

        <Player />
      </div>
    );
  }
}

export default Page;
