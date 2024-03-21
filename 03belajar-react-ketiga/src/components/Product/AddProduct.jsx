import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [rackNumber, setRackNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama Produk yang kamu input: ${productName} berada di rak ${rackNumber}`);
    console.log(`${productName} berada di rak ${rackNumber}`);
  }

  return (
    <>
      <div>AddProduct</div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nama Produk: </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          /><br />
          <label>Nomor Rak: </label>
          <input
            type="text"
            value={rackNumber}
            onChange={(e) => setRackNumber(e.target.value)}
          /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>Hasil: {productName} berada di rak {rackNumber}</div>
    </>
  );
};

export default AddProduct;
