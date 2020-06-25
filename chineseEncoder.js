const numerals = {
  "-": "负",
  ".": "点",
  0: "零",
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
  10: "十",
  100: "百",
  1000: "千",
  10000: "万"
};

const rewrite = str => str.map(e => numerals[e]);

const rewriteChineseNumber = str => {
  if (str.length === 1) return rewrite(str.split("")).join("");
  return str < 20 && str >= 10
    ? rewrite([`${str[0] * 10}`])
    : str
        .split("")
        .reverse()
        .reduce((cur, ac, i) => rewrite([cur * 10 ** i]), [])
        .reverse()
        .join("");
};

function splitChinese(num) {
  num = `${num}`;
  let tab = [],
    dec = "";
  if (num.split("")[0] === "-") {
    tab.push("-");
    num = num.replace("-", "");
  }
  tab = tab.join("");
  if (num.includes(".")) {
    dec = num.substring(num.indexOf("."));
    num = num.substring(0, num.indexOf("."));
  }
  return { tab, number: num, dec };
}

function toChineseNumeral(num) {
  const { tab, number, dec } = splitChinese(num);
  return [
    rewrite(tab.split("")).join(""),
    rewriteChineseNumber(number),
    rewrite(dec.split("")).join("")
  ]
    .filter(e => e.length >= 1)
    .join("");
}

console.log(toChineseNumeral(9));
console.log(toChineseNumeral(10));
console.log(toChineseNumeral(100));
console.log(toChineseNumeral(123.133));
console.log(toChineseNumeral(-123));
console.log(toChineseNumeral(-123.133));

module.exports = toChineseNumeral;
