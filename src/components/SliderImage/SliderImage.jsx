import { useState } from "react";
import useStyles from "./component/Style";
import { Box, Slide } from "@mui/material";
import Dots from "./component/Dots";
import Arrow from "./component/Arrow";
import CarouselSlide from "./component/CarouselSlide";

const contents = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    title: "Slide 1"
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    title: "Slide 2"
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    title: "Slide 3"
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
    title: "Slide 4"
  }
];

export default function SliderImage() {
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");
  const [index, setIndex] = useState(0);
  const content = contents[index];
  const numSlides = contents.length;

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  const classes = useStyles();
  // const autoPlayRef = useRef()

  // useEffect(() => {
  //   const play = () => {
  //     autoPlayRef.current()
  //   }

  //   const interval = setInterval(play, autoPlay * 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="App">
      <Box className={classes.slider}>
        <Arrow direction="left" handleClick={() => onArrowClick("left")} />
        <Slide in={slideIn} direction={slideDirection}>
          <div style={{ margin: "0 1rem" }}>
            <CarouselSlide content={content} />
          </div>
        </Slide>
        <Arrow direction="right" handleClick={() => onArrowClick("right")} />
      </Box>
      <Dots content={contents} index={index} />
    </div>
  );
}
