import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("Deve executar logFn se for fornecido", () => {
    const logger = vi.fn();

    // logger.mockImplementationOnce(() => {});
    
    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});