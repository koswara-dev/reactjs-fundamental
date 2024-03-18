import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StatusPosting from "./components/StatusPosting";
import Rak from "./components/Rak";
import CustomButton from "./components/CustomButton";
import Produk from "./components/Produk";
import AddProduct from "./components/AddProduct";

function App() {
  const daftarProduk = [
    { id: 1, namaProduk: "Wafer Coklat" },
    { id: 2, namaProduk: "Ice Cream" },
    { id: 3, namaProduk: "Ciki Ball" },
  ];

  return (
    <>
      <StatusPosting isPublished={true} />
      <Rak daftarProduk={daftarProduk} />
      <ul>
        {daftarProduk.map((produk) => (
          <Produk key={produk.id} namaProduk={produk.namaProduk} />
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {daftarProduk.map((produk) => (
            <tr key={produk.id}>
              <td>{produk.id}</td>
              <td>{produk.namaProduk}</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomButton text="Masuk" />
      <CustomButton text="Daftar" />
      <AddProduct />
    </>
  );
}

export default App;
