function Car(length, doors) {
  if (length < 7 || doors <= 0) throw new Error("");
  this.length = length;
  this.doors = doors;

  this.body = {};
  this.chassis = {};
  this.body.component = "";
  this.chassis.component = "";

  this.body.component = length =>
    Array(2 * length)
      .map(e => (e = "*"))
      .toString();

  this.chassis.component = length =>
    Array(length)
      .map(e => (e = "_"))
      .toString();
  return this;
}
const car = new Car(7, 1);
console.log(Car.prototype.body.component);
