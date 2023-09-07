const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  //kondisi untuk memvalidasi tipe data pada parameter bahwa data harus berupa array (4)
  if (!Array.isArray(dataPenjualan)) {
    return "Error : Invalid data type, data type must be an array";
  }

  //looping menggunakan methods map untuk mengambil data atau items diatas
  const dataHandle = dataPenjualan.map((items) => {
    //rumus menghitung total modal per novel
    const totalModal = items.hargaBeli * items.totalTerjual;

    //rumus menghitung total pendapatan buat pembanding pada total keuntungan
    const totalpendapatan = items.hargaJual * items.totalTerjual;
    //hasil total 52.960.000

    return {
      totalModal,
      totalpendapatan,
    };
  });

  //menghitung total modal dari keseluruhan novel
  const totalModal = dataHandle.reduce((a, items) => a + items.totalModal, 0);
  //hasilnya 37.196.000

  //menghitung total keuntungan dari data total pendapatan dan total modal keseluruhan novel
  const totalKeuntungan = dataHandle.reduce((a, items) => a + (items.totalpendapatan - items.totalModal),0);
  //hasilnya 52.960.000 - 37.196.000 = 15.764.000

  //menghitung persentase Keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);
  // hasilnya (15.764.000 / 37.196.000)*100 = 42,38% (menggunakan method tofixed)

  //mencari penulis terlaris dan produk buku terlaris dengan urutan terbesar - terkecil
  const dataTerlaris = dataPenjualan.sort((a,b) => b.totalTerjual - a.totalTerjual)[0];

  //membuat variabel baru agar dapat dirubah menjadi format rupiah
  const number1 = totalModal;
  const number2 = totalKeuntungan;

  //format untuk mengubah angka menjadi format Rupiah
  const locale = "id-ID";
  const options = {
    style : "currency",
    currency : "IDR"
  };
  const IDR = new Intl.NumberFormat(locale, options);

  //pemanggilan format agar number menjadi format mata uang rupiah
  const totalModalFormat = IDR.format(number1);
  const totalKeuntunganFormat = IDR.format(number2);

  //return hasil menggunakan tipe object (2,3)
  const hasil = {
    "total keuntungan": totalKeuntunganFormat,
    "total modal": totalModalFormat,
    "persentase keuntungan": persentaseKeuntungan + "%",
    "produk buku terlaris": dataTerlaris.namaProduk,
    "penulis terlaris": dataTerlaris.penulis
  };
  return hasil;
}

//cara agar hasil yang ditampilkan rapih kebawah seperti template soal

console.log(getInfoPenjualan(dataPenjualanNovel));

//output yang diminta berupa object jika saya petakan sendiri
//{
//total keuntungan : 15.764.000 (harus format rupiah)
//total modal : 37.196.000 (harus format rupiah)
//persentase Keuntungan : 42,38%
//produk buku terlaris : 'Garis Waktu'
//penulis terlaris : 'Fiersa Besari'
//}
