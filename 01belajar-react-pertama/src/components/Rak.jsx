import CustomButton from "./CustomButton";
import Produk from "./Produk";
import Size from "./Size";

function Rak() {

  let namaProduk = 'LCD Touchscreen'
  let stok = 1;
  let status = stok > 0 ? 'Stok tersedia' : 'Stok habis'
  // isStatus ... Stok tersedia : Stok habis

  return (
    <>
      <h1>Rak Jualan</h1>
      <Produk nama = {namaProduk} harga = {2000} status = {status}/>
      <Size size = {['Small', 'Medium', 'Large']} />
      <CustomButton namaProduk = {namaProduk} />
    </>
  );
}

export default Rak;