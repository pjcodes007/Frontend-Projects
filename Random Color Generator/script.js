let codes = "123456789ABCDEF";

let body = document.querySelector("body");

let text = document.querySelector(".name");
let gen = document.querySelector(".gen");

gen.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let char = codes[Math.floor(Math.random() * 15)];
    hex += char;
    char = "";
  }
  body.style.backgroundColor = hex;
  text.textContent = hex;
  text.style.backgroundColor = hex;
});
