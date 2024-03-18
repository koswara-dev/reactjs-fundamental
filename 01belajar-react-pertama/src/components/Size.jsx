import React from "react";

const Size = (props) => {
  const sizeList = props.size.map((size) => <option>{size}</option>);
  return <select>{sizeList}</select>;
};

export default Size;
