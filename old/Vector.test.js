const Vector = require("../new");
let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);

it("Add", () => {
  expect(a.add(b).equals(new Vector([4, 6, 8]))).toBe(true);
});

a = new Vector([1, 2, 3]);
it("Sub", () => {
  expect(a.subtract(b).equals(new Vector([-2, -2, -2]))).toBe(true);
});

a = new Vector([1, 2, 3]);
it("dot", () => {
  expect(a.dot(b).arr).toBe(26);
});

a = new Vector([1, 2, 3]);
it("norm", () => {
  expect(a.norm().arr).toBe(Math.sqrt(14));
});

a = new Vector([1, 2, 3]);
it("err", () => {
  expect(a.add(c)).to.throw(new Error(""));
});
