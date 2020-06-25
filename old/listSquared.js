function listSquared(m, n) {
  return [...Array(n - m + 1)]
    .map(
      (e, i) =>
        (e = [
          i + m,
          [...Array(i + m + 1).keys()]
            .slice(1)
            .reduce((s, a) => s + (!((i + m) % a) && a) ** 2, 0)
        ])
    )
    .reduce(
      (acc, cur) => (Math.sqrt(cur[1]) % 1 === 0 ? acc.concat([cur]) : acc),
      []
    );
}

console.time("listSquared");
const alqSum = n => {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum ** 2;
};

function listSquared(m, n) {
  let arr = [...Array(n - m)].fill([0, 0]);
  arr = arr
    .map((e, i) => [i + m, alqSum(i)])
    .filter(e => Math.sqrt(e[1]) % 1 === 0);
  return arr;
}
console.log(listSquared(1, 250)); // should be [[1, 1], [42, 2500], [246, 84100]]
// listSquared(1, 250);
console.timeEnd("listSquared");
