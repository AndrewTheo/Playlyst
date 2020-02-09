import React from "react";
import "../styles.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  typography: {
    subtitle1: {
      color: "#66FCF1"
    }
  },
  iconbutton: {
    color: "white"
  },
  pad: {
    paddingTop: "5%"
  },
  padd: {
    paddingTop: "5%",
    color: "white"
  },
  buttonPadding: {
    padding: "0px"
  },
  brush: {
    fontFamily: "Brusher",
    color: "white"
  }
}));

export default function MediaPlayer(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container>
      <Container>
        <Grid
          container
          justify="center"
          style={{ minHeight: "10vh" }}
          alignItems="center"
          paddingTop={4}
          className={classes.padd}
        >
          <Grid
            item
            xs={12}
            alignItems="center"
            container
            justify="center"
            spacing={50}
          >
            <h1> PLAYLYST.</h1>
          </Grid>
          <Grid
            item
            xs={12}
            alignItems="center"
            container
            justify="center"
            spacing={50}
          >
            <p> Your Lysts. Distraction Free. </p>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="sm"
        m="auto"
        style={{ minHeight: "40vh" }}
        className={classes.pad}
      >
        <Grid
          container
          justify="center"
          style={{ minHeight: "10vh" }}
          alignItems="center"
          paddingTop={2}
          className={classes.pad}
        >
          <Grid
            item
            xs={12}
            alignItems="center"
            container
            justify="center"
            spacing={50}
          />
          <Grid
            item
            xs={12}
            alignItems="center"
            container
            justify="center"
            spacing={50}
          >
            <div style={{ width: "100%", textAlign: "center" }}>
              <h1 className={classes.brush} style={{ fontSize: 80 }}>
                {" "}
                {props.displayTitle}{" "}
              </h1>
            </div>
          </Grid>
          <IconButton
            aria-label="play"
            className={classes.iconbutton}
            onClick={props.mute}
          >
            <VolumeOffIcon style={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            aria-label="play"
            className={classes.iconbutton}
            onClick={props.playPause}
          >
            {props.playingNow ? (
              <PauseCircleOutlineIcon style={{ fontSize: 80 }} />
            ) : (
              <PlayCircleOutlineIcon style={{ fontSize: 80 }} />
            )}
          </IconButton>
          <IconButton
            aria-label="next"
            className={classes.iconbutton}
            onClick={props.nextSong}
          >
            <SkipNextIcon style={{ fontSize: 30 }} />
          </IconButton>
        </Grid>
      </Container>
    </Container>
  );
}

