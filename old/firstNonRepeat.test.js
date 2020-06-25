const firstNonRepeatingLetter = require("./firstNonRepeat");

it("Go hang a salami, I'm a lasagna hog!", () => {
  expect(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")).toBe(
    ","
  );
});

it("sTreSS", () => {
  expect(firstNonRepeatingLetter("sTreSS")).toBe("T");
});

it("abba", () => {
  expect(firstNonRepeatingLetter("abba")).toBe("");
});

it("a", () => {
  expect(firstNonRepeatingLetter("a")).toBe("a");
});

it("stress", () => {
  expect(firstNonRepeatingLetter("stress")).toBe("t");
});

it("3ooo", () => {
  expect(firstNonRepeatingLetter("ooox")).toBe("x");
});

it("moonmen", () => {
  expect(firstNonRepeatingLetter("moonmen")).toBe("e");
});

it("empty string", () => {
  expect(firstNonRepeatingLetter("")).toBe("");
});

it("random string", () => {
  expect(
    firstNonRepeatingLetter(
      "xaynxayn7q1167q116xci8axci8akpjqhkpjqhx274fx274fgn07hgn07h66lem66lemdmdbcrdmdbcr7b68s7b68s3kcwp3kcwp9"
    )
  ).toBe("9");
});
