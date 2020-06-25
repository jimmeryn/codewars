const getP = (function* getParam() {
  let i = 0;
  while (true) {
    yield i == 0 ? (i = 1) : (i += i);
  }
})();

function getA(curried) {
  console.log(getP.next().value, "getA");
  return curried(getC);
}
function getB(curried) {
  console.log(getP.next().value, "getB");
  return curried();
}
function getC() {
  return console.log(getP.next().value, "getC->END");
}

getA(getB);
