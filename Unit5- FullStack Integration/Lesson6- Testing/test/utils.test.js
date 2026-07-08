// These tests focus on a small pure function
import { expect } from "chai";
import { capitalizeWords } from "../src/utils.js";

describe("CapitalizeWords tests", () => {
  it("capitalizes each word in a sentence", () => {
    const result = capitalizeWords("hello world");
    expect(result).to.equal("Hello World");
  });

  it("handles a single word input", () => {
    expect(capitalizeWords("nodejs")).to.equal("Nodejs");
  });

  it("keeps extra spaces in place", () => {
    const result = capitalizeWords("  test   string  ");
    expect(result).to.equal("  Test   String  ");
  });

  it("returns an empty string when the input is empty", () => {
    expect(capitalizeWords("")).to.equal("");
  });

  it("throws an error for non-string input", () => {
    expect(() => capitalizeWords(123)).to.throw("Input must be a string");
  });
});
