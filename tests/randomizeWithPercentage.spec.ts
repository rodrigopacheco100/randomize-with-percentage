import { describe, expect, it } from "vitest";
import randomizeWithPercentage from "../src";

describe(randomizeWithPercentage.name, () => {
  describe("Great ways", () => {
    it("should be able to randomized select one of items", () => {
      for (let i = 0; i < 1000; i += 1) {
        const { value } = randomizeWithPercentage([
          { value: 1, percent: 50 },
          { value: 2, percent: 50 },
        ]);
        expect([1, 2]).toContain(value);
      }
    });

    it("should not select one of items when this one has 0 percentage", () => {
      for (let i = 0; i < 1000; i += 1) {
        const { value } = randomizeWithPercentage([
          { value: 1, percent: 0 },
          { value: 2, percent: 100 },
        ]);
        expect(value).toBe(2);
      }
    });

    it("should be able to randomized select one of items with decimals", () => {
      for (let i = 0; i < 1000; i += 1) {
        const { value } = randomizeWithPercentage([
          { value: 1, percent: 33.33333 },
          { value: 2, percent: 66.66667 },
        ]);
        expect([1, 2]).toContain(value);
      }
    });
  });

  describe("Bad ways", () => {
    it("should not be able to randomized select one of items when the sum of percentage is not 100", () => {
      expect(() =>
        randomizeWithPercentage([
          { value: "potato", percent: 33 },
          { value: "rice", percent: 33 },
          { value: "beans", percent: 33 },
        ])
      ).toThrowError("All percentages sum must be 100");
    });
  });
});
