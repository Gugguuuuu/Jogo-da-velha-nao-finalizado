const cells = document.querySelectorAll(".cell");
let currentPlayer = 0;
let jogador = document.getElementById("titulo");
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let button = document.getElementById("reset");
button.addEventListener("click", () => {
    window.location.reload();
});

const winningCombinations = [
    [0, 1, 2], // Linha superior
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha inferior
    [0, 3, 6], // Coluna esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna direita
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundária
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", function () {
        if (cell.innerText === "") {
            let symbol;

            if (currentPlayer % 2 === 0) {
                jogador.innerText = "Vez do jogador : XIZINHO";

                symbol = "O";
            } else {
                jogador.innerText = "Vez do jogador : BOLINHA";
                symbol = "X";
            }
            cell.innerText = symbol;
            gameBoard[index] = symbol;
            currentPlayer += 1;
            checkPositions()
        }
        
    });
});
function checkPositions() {
    for (let i = 0; i < 8; i++) {
        // FOR que vai fazer a variavel I mudar de valor
        if (gameBoard[winningCombinations[i][0]] === "X" && gameBoard[winningCombinations[i][1]] === "X" && gameBoard[winningCombinations[i][2]] === "X") {
            cells[winningCombinations[i][0]].style.background = "green";
            cells[winningCombinations[i][1]].style.background = "green";
            cells[winningCombinations[i][2]].style.background = "green";
            jogador.innerText = "X ganhou!";
            jogador.style.left = "45%";
            button.style.visibility = 'visible'

        } else if (gameBoard[winningCombinations[i][0]] === "O" && gameBoard[winningCombinations[i][1]] === "O" && gameBoard[winningCombinations[i][2]] === "O") {
            cells[winningCombinations[i][0]].style.background = "green";
            cells[winningCombinations[i][1]].style.background = "green";
            cells[winningCombinations[i][2]].style.background = "green";
            jogador.innerText = "O ganhou!";
            jogador.style.left = "45%";
            button.style.visibility = 'visible'
        } 
        if (currentPlayer == 9){
            jogador.innerText = 'EMPATE!'
            jogador.style.left = "45%";
            button.style.visibility = 'visible'
        }
    }
  
}
