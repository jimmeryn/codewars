var Cat = function(name, weight) {
  Cat.prototype.sum = 0;
  let sum = 0,
    count = 0;
  sum += weight;
  Object.defineProperty(Cat, "averageWeight", {
    get: () => () => sum,
    configurable: true
  });

  if (!name || !weight) throw Error();
  this._name = name;
  this._weight = weight;
  Object.defineProperty(this, "weight", {
    set: weight => (this._weight = weight),
    get: () => this._weight
  });
};
let kot = new Cat("puszek", 15);
console.log(Cat.prototype.sum);
