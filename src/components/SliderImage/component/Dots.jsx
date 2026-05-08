const Dot = ({ active }) => {
  return (
    <span
      style={{
        padding: "0px 9px",
        margin: "0 5px",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: `${active ? "black" : "grey"}`
      }}
    />
  );
};

const Dots = ({ content, index }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {content.map((item, i) => (
        <Dot key={item.title} active={index === i} />
      ))}
    </div>
  );
};

export default Dots;
