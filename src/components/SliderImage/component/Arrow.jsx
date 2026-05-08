

import { Fab } from "@mui/material";

const Arrow = ({ direction, handleClick }) => {
  return (
    <Fab
      style={{
        padding: "2em",
        backgroundColor: "unset",
        boxShadow: "unset",
        border: "10px solid",
        fontSize:"12px"
      }}
      onClick={handleClick}
    >
      {direction === "right" ? ">" : "<"}
    </Fab>
  );
};

export default Arrow;
