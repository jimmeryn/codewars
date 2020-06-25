// let firstNonRepeatingLetter = s => {
//   if (s.length === 1) return s[0];
//   let i = 0;
//   while (s.length > 2) {
//     console.log(`s[${i}]: ${s[i]}`);
//     console.log(`s[0]: ${s[0]}`);
//     console.log(`s: ${s}`);
//     if (s.indexOf(s[0], 1) === -1 && s.indexOf(s[0].toUpperCase(), 1) === -1)
//       return s[0];
//     if (s.length <= 2) return s[0];
//     let rep = s[0];
//     let re = RegExp(rep, "g");
//     s = s.replace(re, "");
//     rep = rep.toUpperCase();
//     re = RegExp(rep, "g");
//     s = s.replace(re, "");
//     if (s === "") return "";
//     i++;
//   }
//   if (s[0] === undefined) return s;
//   return s[0];
// };

let firstNonRepeatingLetter = s => {
  const size = s.length;
  for (let i = 0; i < size; i++) {
    if (s.length === 0) return "";
    if (s.length === 1) return s[0];
    let re = new RegExp(s[0], "gi");
    if (s.search("/W/g")) {
      return s.search("/W/");
    }
    console.log(s.substring(0, s.length));
    console.log(`gffds ${re}`);
    console.log(`search: ${s.substring(1, s.length).search(re)}`);
    if (s.substring(0, s.length).search(re) >= 0) {
      s = s.replace(re, "");
    } else if (s.substring(0, s.length).search(re) === -1) {
      return s[0];
    }
  }
  return "";
};

// console.log(`ABBA: ${firstNonRepeatingLetter("abba")}`);
// console.log(`sTreSS: ${firstNonRepeatingLetter("sTreSS")}`);
// console.log(`stress: ${firstNonRepeatingLetter("stress")}`);
console.log(
  `SALAMI:${firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")}`
);

module.exports = firstNonRepeatingLetter;
