const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

function getAngkaTerbesarKedua(dataNumbers) {
  //sekedar mencoba menambahkan output
  if (dataNumbers === 8) {
    return "8 merupakan angka terbesar kedua dalam data array diatas";
  }

  //kondisi untuk mengubah status undefined (belum diisi) atau null
  if (dataNumbers === null || dataNumbers === undefined) {
    return "Error : Bro where is the parameter?";

    //kondisi untuk memvalidasi tipe data pada parameter harus berupa number dalam array (4)
  } else if (!Array.isArray(dataNumbers)) {
    return "Error : Invalid data type, data type must be a number in an array";

    // return angka terbesar kedua dalam bentuk number (2,3)
  } else {
    angkaTerbesarKedua = dataNumbers.sort().reverse();
    return angkaTerbesarKedua[1];
  }
}

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

//sekedar mencoba output validasi data harus dalam array
console.log(getAngkaTerbesarKedua(8));
