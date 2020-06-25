// Best travel
const factorialize = num =>
  num < 0 ? -1 : num == 0 ? 1 : num * factorialize(num - 1);

function chooseBestSum(t, k, ls) {
  if (ls.length < k) return null;
  const varia =
    factorialize(ls.length) / (factorialize(k) * factorialize(ls.length - k));
  let curBest = 0;
  let c;
  let arMax = 0;
  for (const l of Array(varia)) {
    c = Array(k)
      .fill(0)
      .map((e, i, f) =>
        Math.max(
          ...ls.filter(e => {
            if (arMax === 0) {
              arMax = Math.max(...ls);
              return true;
            }
            arMax = Math.max(...f);
            return e !== arMax;
          })
        )
      );
    arMax = Math.max(...c);
    c = c.reduce((sum, cur) => (sum += cur), 0);
    curBest = c > curBest && c < t ? c : curBest;
    if (curBest === t) return curBest;
  }
  console.log(curBest);
  console.log(ls);
  return curBest;
}

chooseBestSum(163, 3, [50, 55, 56, 57, 58]) === 163
  ? console.log("good")
  : console.log("bad");
