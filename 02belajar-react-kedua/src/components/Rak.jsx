import React from "react";

const Rak = (props) => {
  const daftarProduk = props.daftarProduk;

  return (
    <>
      <h1>Rak jualan</h1>
      {daftarProduk.length > 0 && (
        <h2>Kamu punya {daftarProduk.length} produk di rak</h2>
      )}
    </>
  );
};

export default Rak;
