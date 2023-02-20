import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("Deve gerar um valor de token", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("Deve gerar um valor de token", () => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("Deve gerar um valor de token", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});