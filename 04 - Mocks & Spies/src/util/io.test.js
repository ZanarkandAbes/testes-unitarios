import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.legnth - 1]
      }
    }
  };
});

it("Deve executar o método writeFile", () => {
  const testData = "Test";
  const testFilename = "text.txt";

  writeData(testData, testFilename);

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(undefined, testData);
});

it("Deve retornar uma retornar uma Promise se não retornar nenhum valor caso seja chamada corretamente", () => {
  const testData = "Test";
  const testFilename = "text.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  // expect(fs.writeFile).toBeCalledWith(undefined, testData);
});