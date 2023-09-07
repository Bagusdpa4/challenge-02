//menggunakan arrow function (2)
checkTypeNumber = (givenNumber) => {
  //kondisi untuk mengubah status undefined (belum diisi) atau null
  if (givenNumber === undefined || givenNumber === null) {
    return "Error : Bro where is the parameter?";
  }

  //kondisi untuk memvalidasi tipe data pada parameter, bahwa data harus number (5)
  if (typeof givenNumber !== "number") {
    return "Error : Invalid data type, data type must be number";

    //kondisi menentukan return ganjil atau genap dengan string (3,4) dengan operator modulo (%)
  } else if (givenNumber % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

//sekedar mencoba menambahkan output
console.log(checkTypeNumber(null));
