import { describe, it, expect } from "vitest";
import { combineClasses } from "./utils";

describe("combineClasses", () => {
  it("should return an empty string if no classes are provided", () => {
    expect(combineClasses()).toBe("");
  });

  it("should combine classes", () => {
    expect(combineClasses("class1", "class2")).toBe("class1 class2");
  });

  it("should remove empty strings", () => {
    expect(combineClasses("class1", "", "class2")).toBe("class1 class2");
  });
});
