function getRandomColor(data = txtArr, times = 1, lang = "th") {
  let output = [""];
  lang = lang.toLowerCase();
  for (let i = 0; i < times; i++) {
    let rng = Math.floor(Math.random() * Math.floor(data[lang].length));
    output[i] = data[lang][rng];
  }
  return output;
}
let txtArr = {
  th: ["ม่วง", "น้ำเงิน", "เขียว", "เหลือง", "ส้ม", "แดง", "ขาว", "ดำ", "ชมพู"],
  en: ["purple", "blue", "green", "yellow", "orenge", "red", "black", "pink"],
  css: ["purple", "blue", "green", "yellow", "orenge", "red", "black", "#FF00FF"]
};
let output = document.querySelector(".output");
function startRand() {
  document.querySelector("input#th").checked === false
    ? (lang = "en")
    : (lang = "th");
  output.innerHTML = getRandomColor(txtArr, 1, lang).join();
  output.style.color = getRandomColor(txtArr, 1, "css").join();
}  
