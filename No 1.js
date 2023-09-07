const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

//menggunakan metodhs replace untuk merubah sebuah kata
function changeWord(selectedText, changedText, text) {
  const kalimatBaru = text.replace(selectedText, changedText);
  return kalimatBaru;
}

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("Andini", "paijo", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
console.log(changeWord("cintaku", "amarahku", kalimat2));
