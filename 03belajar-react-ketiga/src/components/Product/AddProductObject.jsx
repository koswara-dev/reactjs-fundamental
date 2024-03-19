import React, { useState } from "react";

const AddProductObject = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Produk yang ditambahkan:", product);
    // Lakukan operasi lain seperti mengirim data ke server
    // POST data ke REST API
  };

  return (
    <div>
      <h2>Form Input Produk</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Produk:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Kategori:</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="PC Gaming">PC Gaming</option>
            <option value="PC Kantoran">PC Kantoran</option>
            <option value="Server">Server</option>
          </select>
        </div>
        <div>
          <label>Harga:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Deskripsi:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Tambah Produk</button>
      </form>
    </div>
  );
};

export default AddProductObject;
