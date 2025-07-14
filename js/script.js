console.log("Orki z Majorki witają!");

let button = document.querySelector(".button");
let magicText = document.querySelector(".magicText");

let buttonDark = document.querySelector(".buttonDark");
let body = document.querySelector(".body");
let lightDark = document.querySelector(".lightDark")

button.addEventListener("click", () => {
  magicText.innerText = "Zostałeś ochlapany przez orkę!";
});


buttonDark.addEventListener("click", () => {
  body.classList.toggle("body__darkMode");

  lightDark.innerText = body.classList.contains("body__darkMode") ? "jasny" : "ciemny";
})

