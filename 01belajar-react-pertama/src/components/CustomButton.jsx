import React from "react";

const CustomButton = (props) => {
  const simpan = () => {
    alert(`Berhasil menyimpan data ${props.namaProduk}!`);
  };

  return <button onClick={simpan}>Simpan Data</button>;
};

export default CustomButton;
