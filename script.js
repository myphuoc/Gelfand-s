let ROW = 0;
let COL = 0;
let row = `<div class="row"`;
let col = `<div class="col"></div>`;
const container = document.querySelector('.container');
let html = '';
let checkPlayer = true;
let TOADO = {
    x: 0,
    y: 0
}
const winner = document.querySelector('.winner');
const playerWin = document.querySelector('.player-win');
const restart = document.querySelector('.restart');
restart.addEventListener('click', () => window.location.reload())

function genderBanCo(ROW, COL) {
    for (let i = 0; i < ROW; i++) {
        html += row;
        html += '>';
        for (let j = 0; j < COL; j++) {
            html += col;
        }
        html += '</div>';
    }
    container.innerHTML = html;
}

let matrixGame = [];

function getValue(ROW, COL) {
    html = '';
    let R = document.querySelector('.ROW').value;
    let C = document.querySelector('.COL').value;
    if (R > 0 && C > 0) {
        ROW = R;
        COL = C;
    }
    genderBanCo(ROW, COL);
    let ochoiCOL = document.querySelectorAll('.col');

    //Set Matrix game;
    let temp = 0;
    for (let i = 0; i < ROW; i++) {
        let orow = [];
        for (let j = 0; j < COL; j++) {
            orow.push(ochoiCOL[temp]);
            temp++;
        }
        matrixGame.push(orow)
    }
    //console.log(matrixGame)
    TOADO = {
        x: ROW - 1,
        y: COL - COL
    }
    if (ROW >= 1 && COL >= 1) {
        matrixGame[TOADO.x][TOADO.y].textContent = 'O';
    }
    //Set event Click Ochoi
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            matrixGame[i][j].addEventListener('click', (e) => startGame(e, i, j, COL = COL))
        }
    }
}

function startGame(e, x, y, COL) {
    if ((x === TOADO.x - 1 && y === TOADO.y) || (y === TOADO.y + 1 && x === TOADO.x)
        || (y === TOADO.y + 1 && x === TOADO.x - 1)) {
        if (x === 0 && y === COL - 1) {
            if (checkPlayer) {
                playerWin.textContent = `Player1 WIN!!`;
                winner.classList.add('show');
            } else {
                playerWin.textContent = `Player2 WIN!!`;
                winner.classList.add('show');
            }
        } else {
            if (checkPlayer) {
                e.target.classList.add('player1');
                e.target.textContent = 'O';
                matrixGame[TOADO.x][TOADO.y].textContent = '';
                TOADO.x = x;
                TOADO.y = y;
            } else {
                e.target.classList.add('player2');
                e.target.textContent = 'O';
                matrixGame[TOADO.x][TOADO.y].textContent = '';
                TOADO.x = x;
                TOADO.y = y;
            }
        }
        checkPlayer = !checkPlayer
    }
    return
}

getValue(ROW, COL)



