const squares = [
  "X",
  "X",
  "X",
  "O",
  "O",
  "O",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
];
const numberToWin = 3;
let checkSquares = [];

const squaresEquality = squares => {
  return squares.length > 0 && squares[0] !== null
    ? squares.every((e, i, a) => e === a[0])
    : false;
};
for (let i = 0; i < squares.length; i += Math.sqrt(squares.length)) {
  for (let j = 0; j <= numberToWin - 1; j++) {
    checkSquares.push(squares[i + j]);
  }
  console.log(squaresEquality(checkSquares));
}
