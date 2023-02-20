import { describe, it, expect } from "vitest";
import { generateResultText } from "./output"

describe("generateResultText()", () => {
  it("Deve retornar uma string não importa qual valor seja passado", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("Deve retornar uma string que contém o resultado calculado se um número for fornecido como resultado", () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it("Deve retornar uma string vazia se o valor 'no-calc' for fornecido como resultado", () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it("Deve retornar uma string escrita 'Invalid' se 'invalid' for fornecido como resultado", () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });
});
