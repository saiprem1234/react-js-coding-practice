const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <div className={`box ${className}`}>{text}</div>;
};

const element = (
  <div className="container">
    <h1>Boxes</h1>
    <div className="boxes-container">
      <Box className="small" text="Small" />
      <Box className="medium" text="Medium" />
      <Box className="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
