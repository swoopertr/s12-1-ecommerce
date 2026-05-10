import React from "react";

import useStyles from "./style";
import { useRef, useEffect } from "react";
import { Card, CardMedia, Typography } from "@mui/material";

const CarouselSlide = ({ content }) => {
  const { imgSrc, title } = content;
  const classes = useStyles();
  const autoPlayRef = useRef();

  // useEffect(() => {
  //   const play = () => {
  //     autoPlayRef.current()
  //   }

  //   const interval = setInterval(play, autoPlay * 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <Card className={classes.card}>
  
      <CardMedia className={classes.img} component="img" src={imgSrc} />
    </Card>
  );
};

export default CarouselSlide;
