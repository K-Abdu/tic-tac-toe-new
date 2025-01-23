const tieMsg = () => `It's a Draw`

const statusNext = document.querySelector('.status');
const resetBtn = document.querySelector('.restart');
const cells = document.querySelectorAll('.cell');
let oPoint = document.querySelectorAll('.oPoints');
let xPoint = document.getSelection('.xPoints');

let o = 0;
let x = 0;

console.log(cells)

let gameStatus = true;
let xNext = true;

const winningfunction = (letter) => {
  gameStatus = false;
  // statusNext.innerHTML = `${letter} is the winner!!`;
  console.log(`${letter} is the winner!!`)
  winner = letter;
  xNext = null;
  if (winner === 'x') {
    statusNext.innerHTML = 'x is the winner!!';
    x += 1
    document.getElementById("xPoints").innerHTML = x;
    console.log(`X has won ${x}, O has won ${o}`);
  }
  else {
    statusNext.innerHTML = 'o is the winner!!';
    o += 1;
    document.getElementById("oPoints").innerHTML = o;
    console.log(`X has won ${x}, O has won ${o}`);
  }
};

const checkGameStatus = () => {
  const box0 = cells[0].classList[2];
  const box1 = cells[1].classList[2];
  const box2 = cells[2].classList[2];
  const box3 = cells[3].classList[2];
  const box4 = cells[4].classList[2];
  const box5 = cells[5].classList[2];
  const box6 = cells[6].classList[2];
  const box7 = cells[7].classList[2];
  const box8 = cells[8].classList[2];

  if (box0 && box0 === box1 && box0 === box2) {
    winningfunction(box0);
    cells[0].classList.add('won')
    cells[1].classList.add('won')
    cells[2].classList.add('won')
  }
  else if (box3 && box3 === box4 && box3 === box5) {
    winningfunction(box3);
    cells[3].classList.add('won')
    cells[4].classList.add('won')
    cells[5].classList.add('won')
  }
  else if (box6 && box6 === box7 && box6 === box8) {
    winningfunction(box6);
    cells[6].classList.add('won')
    cells[7].classList.add('won')
    cells[8].classList.add('won')
  }
  else if (box0 && box0 === box3 && box0 === box6) {
    winningfunction(box0);
    cells[0].classList.add('won')
    cells[3].classList.add('won')
    cells[6].classList.add('won')
  }
  else if (box1 && box1 === box4 && box1 === box7) {
    winningfunction(box1);
    cells[1].classList.add('won')
    cells[4].classList.add('won')
    cells[7].classList.add('won')
  }
  else if (box2 && box2 === box5 && box2 === box8) {
    winningfunction(box2);
    cells[2].classList.add('won')
    cells[5].classList.add('won')
    cells[8].classList.add('won')
  }
  else if (box0 && box0 === box4 && box0 === box8) {
    winningfunction(box0);
    cells[0].classList.add('won')
    cells[4].classList.add('won')
    cells[8].classList.add('won')
  }
  else if (box2 && box2 === box4 && box2 === box6) {
    winningfunction(box2);
    cells[2].classList.add('won')
    cells[4].classList.add('won')
    cells[6].classList.add('won')
  }
  else if (box0 && box1 && box2 && box3 && box4 && box5 && box6 && box7 && box8) {
    gameStatus = false;
    xNext = null;
    statusNext.innerHTML = 'The game has tied';
  }
  else {
    xNext = !xNext;
  }
  if (xNext === true) {
    statusNext.innerHTML = 'x is next';
  }
  else if (xNext === false) {
    statusNext.innerHTML = 'o is next';
  }
}

const reset = () => {
  xNext = true;
  statusNext.innerHTML = 'x is next';
  for (const cell of cells) {
    cell.classList.remove('x');
    cell.classList.remove('o');
    cell.classList.remove('won');
    gameStatus = true;
  }
};
const cellClick = (i) => {
  const classList = i.target.classList;
  const location = classList[1];


  if (!gameStatus || classList[2] === 'x' || classList[2] === 'o') {
    return;
  }
  if (xNext) {
    i.target.classList.add('x');
    checkGameStatus();

  }
  else {
    i.target.classList.add('o');
    checkGameStatus();
  }
}

resetBtn.addEventListener('click', reset);
for (const cell of cells) {
  cell.addEventListener('click', cellClick)
}