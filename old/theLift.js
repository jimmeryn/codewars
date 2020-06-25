var theLift = function(queues, capacity) {
  let akt = 0,
    kolejka = [],
    arr = [];
  // arr.push(akt);
  queues.forEach(floor => {
    if (floor.length !== 0) {
      floor.forEach((e, i) => {
        kolejka.unshift(e);
        arr.push(i);
      });
    }
    while (kolejka.length !== 0) {
      if (akt < kolejka[0]) akt++;
      else akt--;

      queues[akt].forEach(pearson => kolejka.unshift(pearson));
      console.log(arr);

      kolejka = kolejka.filter(x => {
        if (x === akt) arr.push(akt);
        return x !== akt;
      });
    }
    akt++;
  });
  arr.push(0);
  // return arr;
  console.error("Result:", arr);
};

var queues = [
  [], // G
  [], // 1
  [5, 5, 5], // 2
  [], // 3
  [], // 4
  [], // 5
  [] // 6
];

theLift(queues, 5);

console.error("Expected:", [0, 2, 5, 0]);
