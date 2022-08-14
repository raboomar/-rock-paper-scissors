const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userImg = document.querySelector(".userSelection");
const computerImg = document.querySelector(".computerSeletion");
const userScore = document.getElementById("user-score");
const computerSore = document.getElementById("computer-score");
const battleResults = document.getElementById("battle-results");
const reset = document.getElementById("reset");
const btn = [rock, paper, scissors];

btn.forEach((element) => {
  element.addEventListener("click", () => {
    let userWeapon = element.innerHTML.toLowerCase();
    userImg.src = `./images/${userWeapon}.jpeg`;
    computerSelection(userWeapon);
  });
});
reset.addEventListener("click", () => {
  restartData();
});

const computerSelection = (userWeapon) => {
  let randomNum = Math.floor(Math.random() * btn.length);
  let computerWeapon = btn[randomNum].innerHTML.toLowerCase();
  computerImg.src = `./images/${computerWeapon}.jpeg`;
  score(userWeapon, computerWeapon);
};

const score = (user, computer) => {
  let userNum = parseInt(userScore.innerHTML);
  let computerNum = parseInt(computerSore.innerHTML);
  if (user === computer) {
    results(user, computer, true, false);
  } else if (user === "rock" && computer === "scissors") {
    userNum++;
    userScore.innerHTML = userNum;
    results(user, computer, false, true);
  } else if (user === "scissors" && computer === "paper") {
    userNum++;
    userScore.innerHTML = userNum;
    results(user, computer, false, true);
  } else if (user === "paper" && computer === "rock") {
    userNum++;
    userScore.innerHTML = userNum;
    results(user, computer, false, true);
  } else {
    computerNum++;
    computerSore.innerHTML = computerNum;
    results(user, computer, false, false);
  }
};

const results = (user, computer, tie, userWon) => {
  battleResults.style.visibility = "visible";
  if (tie) {
    battleResults.innerHTML = "It's a tie";
  } else if (userWon) {
    battleResults.innerHTML = ` You Won! \n ${user} beats ${computer}`;
  } else {
    battleResults.innerHTML = ` You Lost! \n  ${computer} beats ${user} `;
  }
};

const restartData = () => {
  userScore.innerHTML = "0";
  computerSore.innerHTML = "0";
  userImg.src = "./images/questionMark.jpeg";
  computerImg.src = "./images/questionMark.jpeg";
  battleResults.style.visibility = "hidden";
};
