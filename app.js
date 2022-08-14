const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userImg = document.querySelector(".userSelection");
const btn = [rock, paper, scissors];

btn.forEach((element) => {
  element.addEventListener("click", () => {
    let userWeapon = element.innerHTML;
    userImg.src = `./images/${userWeapon}.jpeg`;
  });
});
