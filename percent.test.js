import { getPercents } from "./percent.js";

describe("test for getPercents function", () => {
    it("correct result for strings with digit, without digits, empty strings, different types of data", () => {
        expect(getPercents(50, 1000)).toBe(500);  
        expect(getPercents(0, 630)).toBe(0);
        expect(getPercents(30, 0)).toBe(0);
        expect(getPercents(0, 0)).toBe(0);
        expect(getPercents(120, 60)).toBe(72);
        expect(getPercents("hi", 65)).toBe("percent error");
        expect(getPercents(35, "what?")).toBe("number error");
    })
})