import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("Deve dropar um erro, se uma string vazia for fornecida", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });
  
  it("Deve dropar um erro com uma mensagem que contém um motivo (não pode ser vazio)", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });
  
  it("Deve dropar um erro se uma string grande vazia for fornecida", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });
  
  it("Deve dropar um erro se qualquer outro valor que não seja uma string for fornecido", () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};
  
    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);
  
    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });
  
  it("Não deve dropar um erro, se uma string que não é vazia for fornecida", () => {
    const input = "valid";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("Deve dropar um erro se um valor NaN for fornecido", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });
  
  it("Deve dropar um erro com uma mensagem contendo o motivo (número inválido)", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });
  
  it("Deve dropar um erro se um valor não numérico for fornecido", () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });
  
  it("Não deve dropar um erro se um número for fornecido", () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
