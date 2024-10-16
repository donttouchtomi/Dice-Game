const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const player1 = document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

const player2 = document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 WIns";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 WIns";
} else {
  document.querySelector("h1").textContent = "Refresh Me";
}
