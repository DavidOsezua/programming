const sum = require("./learningTest");

test("to add two numbers togeter", () => {
  expect(sum(1, 3)).toBe(4);
});

test("to add two numbers togeter", () => {
  expect(sum(0, 0)).toBe(0);
});

test("to add two numbers togeter", () => {
  expect(sum("a", 0)).toBeNull();
});

test("to add two numbers togeter", () => {
  expect(sum("a", "a")).toBeNull();
});

test("to add two numbers togeter", () => {
  expect(sum()).toBeNull();
});

test("to add two numbers togeter", () => {
  expect(sum(-1, 1)).toBe(0);
});

test("to add two numbers togeter", () => {
  expect(sum(-1, -1)).toBe(-2);
});
