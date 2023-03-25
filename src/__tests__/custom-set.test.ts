import { CustomSet } from "../custom-set";
import { MOCK_OBJ1, MOCK_OBJ1_AGAIN, MOCK_OBJ2, MOCK_OBJ3 } from "../__mocks__";

describe("Tests for Custom Set", () => {
  it("should be valid array with only unique values", () => {
    const input = [MOCK_OBJ1, MOCK_OBJ1_AGAIN, MOCK_OBJ2];
    const output = [MOCK_OBJ1, MOCK_OBJ2];

    expect(new CustomSet(input).array).toStrictEqual(output);
  });

  it("should be true and added new", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);
    const output = input.add(MOCK_OBJ3);

    expect(output).toBeTruthy();
    expect(input.array).toStrictEqual([MOCK_OBJ1, MOCK_OBJ2, MOCK_OBJ3]);
  });

  it("should be false and NOT added new", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);
    const output = input.add(MOCK_OBJ2);

    expect(output).toBeFalsy();
    expect(input.array).toStrictEqual(input.array);
  });

  it("should be true and removed", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);
    const output = input.removeItemBy("1");

    expect(output).toBeTruthy();
    expect(input.array).toStrictEqual([MOCK_OBJ2]);
  });

  it("should be falsy and NOT removed", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);
    const output = input.removeItemBy("123");

    expect(output).toBeFalsy();
    expect(input.array).toStrictEqual(input.array);
  });

  it("should return valid result", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);

    expect(input.getItemBy("1")).toStrictEqual(MOCK_OBJ1);
  });
});
