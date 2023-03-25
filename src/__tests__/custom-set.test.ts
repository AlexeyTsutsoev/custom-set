import { CustomSet } from "../custom-set";
import { MOCK_OBJ1, MOCK_OBJ1_AGAIN, MOCK_OBJ2, MOCK_OBJ3 } from "../__mocks__";

describe("Tests for Custom Set", () => {
  it("should be valid array with only unique values", () => {
    const input = [MOCK_OBJ1, MOCK_OBJ1_AGAIN, MOCK_OBJ2];
    const output = [MOCK_OBJ1, MOCK_OBJ2];

    expect(new CustomSet(input).array).toStrictEqual(output);
  });

  it("should be true and updated", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);
    const output = input.add(MOCK_OBJ3);

    expect(output).toBeTruthy();
    expect(input.array).toStrictEqual([MOCK_OBJ1, MOCK_OBJ2, MOCK_OBJ3]);
  });

  it("should be true and updated", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);
    const output = input.removeItemBy("1");

    expect(output).toBeTruthy();
    expect(input.array).toStrictEqual([MOCK_OBJ2]);
  });

  it("should return valid result", () => {
    const input = new CustomSet([MOCK_OBJ1, MOCK_OBJ2]);

    expect(input.getItemBy("1")).toStrictEqual(MOCK_OBJ1);
  });
});
