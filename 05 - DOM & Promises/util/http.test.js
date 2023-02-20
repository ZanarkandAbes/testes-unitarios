import { it, vi, expect } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Não é uma string.");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      }
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

it("Deve retornar qualquer resposta disponível", () => {
  const testData = { key: "test", }
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("Deve retornar o dedo fornecido em JSON antes de enviar uma requisição", async() => {
  const testData = { key: "test", }
  let errorMessage; 
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe("Não é uma string.")
});

it("Deve dropar um HttpError caso uma resposta negativa venha", () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        }
      };
      resolve(testResponse);
    });
  });
  const testData = { key: "test", }

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});