import { describe, it, expect, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Test title";
const testContent = "Test content";
let testFormData;

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  })
  it("Deve extrair um título e conteúdo de um form data fornecido", () => {

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
})