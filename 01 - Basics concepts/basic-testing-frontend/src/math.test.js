import { it, expect } from "vitest";
import { add } from "./math";

it("Deve produzir uma soma de todos os valores que estão dentro do array de números", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  expect(result).toBe(expectedResult);
});

it("Deve produzir um NaN caso um número inválido for fornecido", () => {
  const inputs = ["Invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("Deve produzir uma soma de forma correta se o array de valores com strings numéricas for enviado", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
  expect(result).toBe(expectedResult);
});

it("Deve produzir 0 se um array vazio for enviado", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("Deve dropar um erro se nenhum valor for passado para a função", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it("Deve dropar um erro se for fornecido vários valores ao invés de um array", () => {
  const num1 = 2;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});