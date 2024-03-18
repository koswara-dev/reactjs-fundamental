import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("Nama Produk: ", productName);
  };

  return (
    <div>
      <h2>Tambah Produk</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Nama Produk:
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
