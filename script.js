"use strict";

// console.log(document.querySelector(".message").textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScrore = 0;
const displayMessages = function (message) {
  // this funcation calling textconatent
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", () => {
  const gusse = Number(document.querySelector(".guess").value);
  if (!gusse) {
    displayMessages("No Number");
  } else if (gusse === secretNumber) {
    displayMessages("Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.body.style.backgroundColor = "#60b347";
    if (score > HighScrore) {
      HighScrore = score;
      document.querySelector(".highscore").textContent = HighScrore;
    }
    if (gusse) {
      setTimeout(() => {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".score").textContent = score;
        document.querySelector(".guess").value = "";
        document.body.style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector(".highscore").textContent = HighScrore;
      }, 5000);
    }
  } else if (gusse !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        gusse > secretNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "red";
    }
    //   } else if (gusse > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too High";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You lost the game";
    //       document.querySelector(".score").textContent = 0;
    //       document.body.style.backgroundColor = "red";
    //     }
    //   } else if (gusse < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too Low";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You lost the game";
    //       document.body.style.backgroundColor = "red";
    //       document.querySelector(".score").textContent = 0;
    //     }
    //     // document.querySelector(".message").textContent = "Too Low";
    //     // score--;
    //     // document.querySelector(".score").textContent = score;
  }
});
const againBtn = document.querySelector(".again");

againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
