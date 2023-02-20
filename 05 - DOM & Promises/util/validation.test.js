import { it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

it("Deve dropar um erro se a string for vazia", () => {
  const text = "";
  const errorMessage = "String vazia";

  const validationFn = () => validateNotEmpty(text);

  expect(validationFn).toThrow();
});

it("Deve dropar um erro se a string tiver espaços em branco", () => {
  const text = "  ";
  const errorMessage = "String vazia";

  const validationFn = () => validateNotEmpty(text);

  expect(validationFn).toThrow();
});

it("Deve dropar um erro se a string for indefinida", () => {
  const text = "";
  const errorMessage = "String vazia";

  const resultFn = () => validateNotEmpty(text, errorMessage);

  expect(resultFn).toThrow(errorMessage);
});