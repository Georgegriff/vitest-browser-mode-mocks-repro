import { http } from "msw";
import { expect, vi } from "vitest";
import { outerFunction } from "./userService.js";
// Import the mocked function
import { innerFunction } from "./api.js";
import { test } from "../test-extend.js";

// Mock the inner module - BUG REPRODUCTION
vi.mock("./api.js", () => ({
  innerFunction: vi.fn(),
}));

test("BUG: vi.mock() should mock innerFunction but may not work in browser mode", () => {
  console.warn(
    "======== HERE: With this test open run ctrl+s to re-run the tests, it should fail about 50% of the time ========"
  );
  // Setup mock return value

  // Call the outer module function
  const result = outerFunction();

  // BUG: This fails when the msw code in test-extend is
  expect(innerFunction).toHaveBeenCalled();
});
