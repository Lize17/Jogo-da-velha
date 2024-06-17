var jogador = 'X'
var mesajogo = ['', '', '', '', '', '', '', '', '']
var gameActive = true

const formaGanhar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const boardEl = document.getElementById('mesajogo');
const messageEl = document.getElementById('message');

function makeMove(cellIndex) {
    if (mesajogo[cellIndex] === '' && gameActive) {
        mesajogo[cellIndex] = jogador;
        document.getElementById(`cell-${cellIndex}`).innerText = jogador;
        if (checkWin()) {
            messageEl.innerText = `Jogador ${jogador} venceu!`
            gameActive = false;
        } else if (mesajogo.indexOf('') === -1) {
            messageEl.innerText = 'Empate!';
            gameActive = false;
        } else {
            jogador = jogador === 'X' ? 'O' : 'X';
            messageEl.innerText = `Jogador ${jogador} é sua vez`;
        }
    }
}

function checkWin() {
    for (const combo of formaGanhar) {
        const [a, b, c] = combo;
        if (mesajogo[a] && mesajogo[a] === mesajogo[b] && mesajogo[a] === mesajogo[c]) {
            return true;
        }
    }
    return false;
}
//peguei isso aqui na internet! 

function resetBoard() {
    mesajogo = ['', '', '', '', '', '', '', '', ''];
    jogador = 'X';
    gameActive = true;
    messageEl.innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}

boardEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
        const cellIndex = e.target.id.split('-')[1];
        makeMove(cellIndex);
    }
});

resetBoard();
