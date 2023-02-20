import fs from "fs";
import path from "path";

import { describe, it, expect, vi, beforeEach, test } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it("Deve adicionar um parágrafo de erro para o elemento de id='errors'", () => {
  showError("Test");

  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it("Não pode conter um parágrafo de erro inicialmente", () => {
  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it("Deve apresentar a mensagem fornecida no parágrafo de erro", () => {
  const testErrorMessage = "Test";

  showError(testErrorMessage);

  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;

  expect(errorParagraph.textContent).toBe(testErrorMessage);
});