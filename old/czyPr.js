function czyPr(array) {
  let myMap = new Map();
  let newArr = [];
  newArr.push(...array);
  array.reverse();
  console.log(array);
  console.log(newArr);
  myMap.set(1, newArr);
  myMap.set(2, array);
  myMap.forEach((value, key) => console.log(key + " = " + value));
}
czyPr([1, 2, 3]);
