import {
  sum,
  subtract,
  multiply,
  divide,
  remaining,
  fetchData,
  postData,
} from "./index";

describe("Math tests", () => {
  describe("Sum test", () => {
    test("Adds 1 + 2 and expected to be 3", () => {
      expect(sum(1, 2)).toEqual(3);
    });
  });

  describe("Subtract test", () => {
    test("Subtracts 2 - 1 and expected to be 1", () => {
      expect(subtract(2, 1)).toEqual(1);
    });
  });

  describe("Multiply test", () => {
    test("Multiplies 2 * 2 and expected to be 4", () => {
      expect(multiply(2, 2)).toEqual(4);
    });
  });

  describe("Divide test", () => {
    test("Divides 2 / 2 and expected to be 1", () => {
      expect(divide(2, 2)).toEqual(1);
    });

    test("Divides 2 / 0 and expected to get error message", () => {
      expect(divide(2, 0)).toEqual(expect.any(String));
    });

    test("Divides 3 % 2 and the remaining expected to be 1", () => {
      expect(remaining(3, 2)).toEqual(1);
    });
  });
});

describe("API tests", () => {
  describe("GET requests", () => {
    test("Fetches data from an API ( Strict value check )", async () => {
      expect(
        await fetchData("https://jsonplaceholder.typicode.com/todos/1")
      ).toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      });
    });

    test("Fetches data from an API ( Only value type check )", async () => {
      expect(
        await fetchData("https://jsonplaceholder.typicode.com/todos/1")
      ).toEqual({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        completed: expect.any(Boolean),
      });
    });
  });

  describe("POST requests", () => {
    test("Posts data to an API ( Strict value check )", async () => {
      expect(
        await postData("https://jsonplaceholder.typicode.com/posts", {
          title: "foo",
          body: "bar",
          userId: 1,
        })
      ).toEqual({
        title: "foo",
        body: "bar",
        userId: 1,
        id: 101,
      });
    });

    test("Posts data to an API ( Only value type check )", async () => {
      expect(
        await postData("https://jsonplaceholder.typicode.com/posts", {
          title: "foo",
          body: "bar",
          userId: 1,
        })
      ).toEqual({
        title: expect.any(String),
        body: expect.any(String),
        userId: expect.any(Number),
        id: expect.any(Number),
      });
    });
  });
});
