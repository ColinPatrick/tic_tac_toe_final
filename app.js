// all initial declarations
let cells = document.querySelectorAll('.row > div');
let player = 'X';
let turnCount = 0;
let gameActive = true;
let win = false;
let message = document.getElementById("message");
let myButton = document.getElementById("resetButton");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// initial h3 message letting player X know that it is their turn
message.innerHTML = "It's your turn, player " + player + "!";
// calls the function 'resetGame' that will refresh the page when the button is clicked
myButton.addEventListener('click', resetGame);
// initial loop that calls the function 'cellClicked' that dictates what happens when a cell is clicked
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
};
// this is the 'resetGame' function that refreshes the page when the reset button is clicked
function resetGame() {
  window.location.reload();
};
// this is the 'cellClicked' function that checks the boolean value of 'gameActive' to determine if the game is still going on, and if it is it calls the 'togglePlayer' and the 'checkWin' functions
function cellClicked(event) {
  if (gameActive == true) {
    togglePlayer(event);
    checkWin();
  };
};
// this is the 'togglePlayer' function which updates the value of 'turnCount' to indicate a turn has passed, changes the h3 messagee element to say whose turn it is based on the value of 'turnCount', and puts an 'X' or an "O" in the cell depending on whose turn it is (it does all of this only if there isn't already an 'X' or an 'O' in the clicked cell)
function togglePlayer(event) {
  let cell = event.target;
  if (cell.textContent != 'X' && cell.textContent != 'O') {
    turnCount++;
    if (turnCount % 2 == 0) {
      message.innerHTML = "It's your turn, player X!";
    } else {
      message.innerHTML = "It's your turn, player O!";
    };
    cell.textContent = player;
    if (player === 'X') {
    player = 'O';
    } else {
    player = 'X';
    };
  };
};
// this is the 'checkWin' function, which uses the 'winningCombos' values to determine if the clicked cell will cause the player to win - if it does, the h3 message is changed to show who won, and the 'gameActive' value is changed to false
function checkWin(event) {
  for (n = 0; n < winningCombos.length; n++) {
    if (cells[winningCombos[n][0]].textContent === cells[winningCombos[n][1]].textContent && cells[winningCombos[n][1]].textContent === cells[winningCombos[n][2]].textContent && (cells[winningCombos[n][0]].textContent === "X" || cells[winningCombos[n][0]].textContent === "O")) {
      win = true;
      gameActive = false;
      message.innerHTML ='Player ' + cells[winningCombos[n][0]].textContent + ' has won the game!';
    };
  };
  // conditional loop that will change the h2 message to say that it's a draw if 9 turns go by and there is no winner
  if (turnCount == 9 && win == false) {
    message.innerHTML = 'It is a draw!';
  };
};
