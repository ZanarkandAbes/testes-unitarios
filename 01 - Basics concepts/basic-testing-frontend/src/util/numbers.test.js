import { describe, it, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("Deve transformar uma string em um número", () => {
    // Arrange
    const input = "1";

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBeTypeOf("number");
  });

  it("Deve transformar uma string em um número", () => {
    // Arrange
    const input = "1";

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBe(+input);
  });

  it("Deve produzir um NaN caso um valor inválido for fornecido", () => {
    const input = "Invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("Deve retornar um array de números se um array de números em string for fornecido", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("Deve dropar um erro se um array com alguma string vazia for fornecido", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});

