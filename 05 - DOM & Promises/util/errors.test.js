import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("Deve setar o statusCode, a mensagem e os dados do erro", () => {
    const testHttpErrorMessage = "Erro de http";
    const testStatusCode = 500;
    const testData = {
      userName: "userName",
    }

    const httpError = new HttpError(testStatusCode, testHttpErrorMessage, testData);

    expect(httpError.statusCode).toBe(testStatusCode);
    expect(httpError.message).toBe(testHttpErrorMessage);
    expect(httpError.data).toBe(testData);
  });

  it("Deve conter undefined como data se o data não for fornecido", () => {
    const testHttpErrorMessage = "Erro de http";
    const testStatusCode = 500;

    const httpError = new HttpError(testStatusCode, testHttpErrorMessage);

    expect(httpError.statusCode).toBe(testStatusCode);
    expect(httpError.message).toBe(testHttpErrorMessage);
    expect(httpError.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("Deve retornar uma mensagem de erro ao ser instanciado", () => {
    const testValidationErrorMessage = "Erro de validação";
    
    const validationError = new ValidationError(testValidationErrorMessage);

    expect(validationError.message).toBe(testValidationErrorMessage);
  });
});