import React from "react";
import "../styles.css";
import ReactPlayer from "react-player";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ContainerBoot from "react-bootstrap/Container";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import imgTitle from "./place.png";

import MediaPlayer from "./MediaPlayer.js";

import { makeStyles, useTheme } from "@material-ui/core/styles";

var urls = [
  "https://www.youtube.com/playlist?list=PLRZlMhcYkA2H4GXXn4vQ8HaqZXrsnff1s",
  "https://www.youtube.com/watch?v=hHW1oY26kxQ",
  "https://www.youtube.com/watch?v=-s6CIGT2RX8",
  "https://www.youtube.com/watch?v=VIWVfkF2IeI",
  "http://tunein.streamguys1.com/cnn",
  "http://tunein.streamguys1.com/ESPNTV",
  "http://rfcmedia.streamguys1.com/MusicPulse.mp3"
];

var titles = [
  "Top Hits",
  "Study Lyst",
  "Hip-Hop Lyst",
  "Chill Lyst",
  "CNN Radio",
  "ESPN Radio",
  "Hits Radio"
];

class Player extends React.Component {
  state = {
    url: urls[0],
    pip: false,
    playing: false,
    controls: true,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    title: titles[0],
    channel: 0
  };

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };

  handleChannelChange = () => {
    if (this.state.channel === urls.length - 1) {
      this.setState({
        channel: 0,
        title: titles[0]
      });
    } else {
      this.setState({
        channel: this.state.channel + 1,
        title: titles[this.state.channel + 1]
      });
    }
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handlePlay = () => {
    this.setState({ playing: true });
  };

  handlePause = () => {
    this.setState({ playing: false });
  };

  handleMute = () => {
    console.log("onMute");
    this.setState({ muted: true });
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const isPlaying = this.state.playing;
    return (
      <div>
        <ReactPlayer
          url={urls[this.state.channel]}
          controls={true}
          playing={this.state.playing}
          ref={this.ref}
          width="0px"
          height="0px"
          className="react-player"
          onPlay={this.handlePlay}
          onPause={this.handlePause}
        />

        <MediaPlayer
          playPause={this.handlePlayPause}
          nextSong={this.handleChannelChange}
          playingNow={this.state.playing}
          displayTitle={this.state.title}
          mute={this.handleMute}
        />
      </div>
    );
  }
}

export default Player;
