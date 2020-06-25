const removeDuplicate = require("./duplicates.js");

// const removeDuplicate = s => [...new Set(s.split(" "))].join(" ");

const a = "one one two two two three";
interface("Basic Test", () => {
  expect(removeDuplicate(a).toBe("one two three"));
});
