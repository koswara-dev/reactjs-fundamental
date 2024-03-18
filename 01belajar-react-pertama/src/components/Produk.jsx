function Produk(props) {
    
  return (
    <>
      <h2>Component Produk {props.nama}</h2>
      <h2>Component Produk {props.harga}</h2>
      <h2>Component Produk {props.status}</h2>
    </>
  );
}

Produk.defaultProps = {
    nama: 'Anonim',
    harga: 0
}

export default Produk;
