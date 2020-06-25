//@ts-check

function nextSmaller(n) {
  let last = 0;
  n = n
    .toString()
    .split("")
    .reverse()
    .map(e => parseInt(e));
  n.find(x => {
    if (last === 0) last = x;
    else if (last < x) {
      console.log(`index of x=${x} is ${n.indexOf(x)}`);
      console.log(`n= ${n}`);
      n.splice(n.indexOf(x[n.indexOf(last)]) + 1, 0, last);
      console.log(`after split n= ${n}`);
      return n.reverse().pop();
    } else if (last > x) last = x;
  });
  n = n.map(e => e.toString());
  console.log(`hallooooo ${n}`);
  n = n.join("");

  return n;
}

//test
console.log(`${nextSmaller(10891750210017)} ?= 10891750207110`);
