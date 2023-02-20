import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
