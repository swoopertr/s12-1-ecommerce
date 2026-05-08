import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  card: {
    borderRadius: 5,
    width: "80vw",
    height: "70vh",
    color: "black"
  },
  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
