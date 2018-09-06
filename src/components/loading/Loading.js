import React from "react";
import Loading from "../../assets/images/loading.gif";

export default props => {
  const styleImages = {
    width: props.width ? props.width : "80px",
    margin: "auto",
    display: "block"
  };

  return (
    <div>
      <img src={Loading} alt="Loading..." style={styleImages} />
    </div>
  );
};
