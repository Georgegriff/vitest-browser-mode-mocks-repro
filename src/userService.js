// Outer module that calls the inner module
import { innerFunction } from "./api.js";

export function outerFunction() {
  return innerFunction();
}
