const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userImg = document.querySelector(".userSelection");
const computerImg = document.querySelector(".computerSeletion");
const userScore = document.getElementById("user-score");
const computerSore = document.getElementById("computer-score");
const btn = [rock, paper, scissors];

btn.forEach((element) => {
  element.addEventListener("click", () => {
    let userWeapon = element.innerHTML;
    userImg.src = `./images/${userWeapon}.jpeg`;
    computerSelection(userWeapon);
  });
});

const computerSelection = (userWeapon) => {
  let randomNum = Math.floor(Math.random() * btn.length);
  let computerWeapon = btn[randomNum].innerHTML;
  computerImg.src = `./images/${computerWeapon}.jpeg`;
  score(userWeapon, computerWeapon);
};

const score = (user, computer) => {
  let userNum = parseInt(userScore.innerHTML);
  let computerNum = parseInt(computerSore.innerHTML);
  if (user === computer) console.log("tie");
  else if (user === "Rock" && computer === "Scissors") {
    userNum++;
    userScore.innerHTML = userNum;
  } else if (user === "Scissors" && computer === "Paper") {
    userNum++;
    userScore.innerHTML = userNum;
  } else if (user === "Paper" && computer === "Rock") {
    userNum++;
    userScore.innerHTML = userNum;
  } else {
    computerNum++;
    computerSore.innerHTML = computerNum;
  }
};
