const { alarm } = require("./alarme");
const { describe, expect, it } = require("@jest/globals");

describe("alarm function", () => {
  it("alarm 4 numbers", () => {
    expect(alarm(1, 5, 3, 5)).toBe(120);
  });

  it("alarm 4 numbers", () => {
    expect(alarm(23, 59, 0, 34)).toBe(35);
  });

  it("alarm 4 numbers", () => {
    expect(alarm(21, 33, 21, 10)).toBe(1417);
  });
});
