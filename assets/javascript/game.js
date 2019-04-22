// game variables
let redClicked = false;
let blueClicked = false;
let yellowClicked = false;
let greenClicked = false;
let redCrystalValue = 0;
let blueCrystalValue = 0;
let yellowCrystalValue = 0;
let greenCrystalValue = 0;
let playerNumSum = 0;
let MagicNum = 0;

// click listeners
$("#red-crystal").on("click", function() {
  console.log("red click pressed");
  redClicked = true;
  getRandomNum()
});

$("#blue-crystal").on("click", function() {
  console.log("blue click pressed");
  blueClicked = true;
});

$("#yellow-crystal").on("click", function() {
  console.log("yellow click pressed");
  yellowClicked = true;
});

$("#green-crystal").on("click", function() {
  console.log("green click pressed");
  greenClicked = true;
});

// function to generate randaom number
function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// function to add crystal number to players number
function addCrystalNum(crystalNum, playerNum) {
  return crystalNum + playerNum;

}

for (let i=0; )
switch ((redClicked, blueClicked, yellowClicked, greenClicked)) {
  case redClicked:
    text = "Off";
    break;
  case blueClicked:
    text = "On";
    break;
  case yellowClicked:
    text = "On";
    break;
  case greenClicked:
    text = "On";
    break;
  default:
    text = "No value found";
}
