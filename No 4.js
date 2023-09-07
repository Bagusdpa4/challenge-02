const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  //kondisi untuk memvalidasi tipe data pada parameter bahwa data harus berupa array (4)
  if (!Array.isArray(dataPenjualan)) {
    return "Error : Invalid data type, data type must be an array";
  }

  //looping menggunakan methods map untuk mengambil data atau items dari totalTerjual
  const totalTerjual = dataPenjualan.map((items) => items.totalTerjual);

  // return dengan methods reduce guna men-total dari seluruh totalTerjual dalam bentuk number(2,3)
  const totalPenjualan = totalTerjual.reduce((a, items) => a + items, 0);
  return totalPenjualan;
}

console.log(getTotalPenjualan(dataPenjualanPakAldi));

//sekedar mencoba output validasi data harus dalam array
// console.log(getTotalPenjualan(dataPenjualanPakAldi.hargaSepatu));
