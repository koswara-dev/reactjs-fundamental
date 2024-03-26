import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const categoryRef = useRef("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fatching products:", error);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    if (!category) return products;
    return products.filter((product) => product.category === category);
  }, [category, products]);

  const handleChange = () => {
    setCategory(categoryRef.current.value);
  };

  return (
    <div>
      <label>
        Select a catgeory:
        <select ref={categoryRef} onChange={handleChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </label>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
