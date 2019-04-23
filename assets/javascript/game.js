// game variables
let redCrystalValue = 0;
let blueCrystalValue = 0;
let yellowCrystalValue = 0;
let greenCrystalValue = 0;
let playerNumSum = 0;
let magicNum = 0;
let totalWin = 0;
let totalLoss = 0;
let newGame = false;

// function to generate randaom number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// function to add crystal number to players number
function addCrystalNum(crystalNum, playerNum) {
  return crystalNum + playerNum;
}

function restartGame() {
  // if (playerNumSum === 0 || newGame) {
  magicNum = getRandomNum(1, 100);
  $("#rand-num").html(magicNum);
  playerNumSum = 0;
  redCrystalValue = getRandomNum(1, 12);
  blueCrystalValue = getRandomNum(1, 12);
  yellowCrystalValue = getRandomNum(1, 12);
  greenCrystalValue = getRandomNum(1, 12);
  newGame = false;
}

function checkScore() {
  console.log(playerNumSum, magicNum);
  if (playerNumSum > magicNum) {
    // alert("You Lost!");
    totalLoss++;
    $("#losses").html(totalLoss);
    restartGame();
  } else if (playerNumSum === magicNum) {
    // alert("You WIn!");
    totalWin++;
    $("#wins").html(totalWin);
    restartGame();
  } else {
  }
}
// code trying to make it so that crytal values are different
// }if (redCrystalValue === blueCrystalValue) {
//   blueCrystalValue = getRandomNum(1, 12);
// }if (blueCrystalValue != redCrystalValue) {
//   yellowCrystalValue = getRandomNum(1, 12);
// }if (yellowCrystalValue != blueCrystalValue){
//   greenCrystalValue = getRandomNum(1, 12);
// }else{
//   yellowCrystalValue = getRandomNum(1, 12);
//   greenCrystalValue = getRandomNum(1, 12);
// }
restartGame();
// click listeners
$(".crystals").on("click", function(event) {
  console.log("crystal clicked", $(this).data("crystal"));
  switchCaseFunc($(this).data("crystal"));
});

function switchCaseFunc(color) {
  switch (color) {
    case "red":
      console.log("Red case init", redCrystalValue);
      // addCrystalNum(redCrystalValue, playerNumSum);
      playerNumSum = playerNumSum + redCrystalValue;
      $("#play-num").html(playerNumSum);
      checkScore();

      break;
    case "blue":
      console.log("Blue case init", blueCrystalValue);
      playerNumSum = playerNumSum + blueCrystalValue;
      $("#play-num").html(playerNumSum);
      checkScore();

      break;
    case "yellow":
      console.log("Yellow case init", yellowCrystalValue);
      playerNumSum = playerNumSum + yellowCrystalValue;
      $("#play-num").html(playerNumSum);
      checkScore();

      break;
    case "green":
      console.log("Green case init", greenCrystalValue);
      playerNumSum = playerNumSum + greenCrystalValue;
      $("#play-num").html(playerNumSum);
      checkScore();

      break;
    default:
      text = "No value found";
  }
}
