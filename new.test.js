// const emptyFunction = require("./new");

// it("test", () => {
// expect(emptyFunction()).toBe(undefined);
// });

const toChineseNumeral = require("./new");

it("Whole numbers", function() {
  expect(toChineseNumeral(9)).toBe("九");
});
it("Negative numbers", function() {
  expect(toChineseNumeral(-5)).toBe("负五");
});
it("Fractional numbers", function() {
  expect(toChineseNumeral(0.5)).toBe("零点五");
});
it("Special Cases", function() {
  expect(toChineseNumeral(10)).toBe("十");
  expect(toChineseNumeral(110)).toBe("一百一十");
  expect(toChineseNumeral(111)).toBe("一百一十一");
  expect(toChineseNumeral(1000)).toBe("一千");
  expect(toChineseNumeral(10000)).toBe("一万");
  expect(toChineseNumeral(10006)).toBe("一万零六");
  expect(toChineseNumeral(10306.005)).toBe("一万零三百零六点零零五");
});
