const Vector = function(components) {
  this.components = components;
};

Vector.prototype.lengthCheck = ({ components }) =>
  this.components.length === components.length;

Vector.prototype.add = v => {
  if (this.lengthCheck(v))
    return new Vector(this.components.map((e, i) => e + v.components[i]));
  throw new Error("Add");
};

Vector.prototype.subtract = v => {
  if (this.lengthCheck(v))
    return new Vector(this.components.map((e, i) => e - v.components[i]));
  throw new Error("Sub");
};

Vector.prototype.equals = v =>
  this.lengthCheck(v)
    ? JSON.stringify(this.components) === JSON.stringify(v.components)
    : false;

Vector.prototype.dot = v => {
  if (this.lengthCheck(v))
    return this.components.reduce(
      (acc, cur, i) => (acc += cur * v.components[i]),
      0
    );
  throw new Error("Dot");
};

Vector.prototype.norm = () =>
  Math.sqrt(this.components.reduce((acc, cur) => (acc += cur ** 2), 0));

Vector.prototype.toString = () => `(${[...this.components]})`;

module.exports = Vector;
