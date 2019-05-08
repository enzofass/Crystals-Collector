// game variables
let redCrystalValue = 0;
let blueCrystalValue = 0;
let yellowCrystalValue = 0;
let greenCrystalValue = 0;
let playerNumSum = 0;
let magicNum = 0;
let totalWin = 0;
let totalLoss = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function to generate randaom number with min and max
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// shuffle array to generate an array of random numbers. This way each crystal has a unique number (found this online :D)
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// function is called at the beginning and also if player wins or losses
function restartGame() {
  magicNum = getRandomNum(25, 100);
  $("#rand-num").html(magicNum);
  playerNumSum = 0;
  arr = shuffle(arr);
  redCrystalValue = arr[2];
  blueCrystalValue = arr[4];
  yellowCrystalValue = arr[6];
  greenCrystalValue = arr[8];
}

// function is called after we add the crystal value to players number to determine if won or lost
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
  }
}

// Initialize Game
restartGame();

// click listener
$(".crystals").on("click", function(event) {
  console.log("crystal clicked", $(this).data("crystal"));
  switchCaseFunc($(this).data("crystal"));
});

// switch case to dtermine which crystal was clicked and add crystal value to player number, after we check status of the score
function switchCaseFunc(color) {
  switch (color) {
    case "red":
      console.log("Red case init", redCrystalValue);
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
