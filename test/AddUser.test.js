import { describe, test, expect } from "vitest";
import AddUser from '../src/components/Users/AddUser';

describe("AddUser", () => {
  test("should be a function", () => {
    expect(typeof AddUser).toBe("function");
  })

  test("should throw if username parameter is missing", () => {
    expect(() => AddUser()).toBeNull();
  });

  test("should throw if age parameter is missing", () => {
    expect(() => AddUser()).toBeNull();
  });

  test("should throw if username isn't a string", () => {
    expect(() => AddUser()).toThrow();
  });

  test("should throw if age isn't a number", () => {
    expect(() => AddUser()).toThrow();
  });

});
