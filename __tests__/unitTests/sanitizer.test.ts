import { Sanitizer } from "../../src/stringSanitizer/sanitizer";
import {
	SIMPLE_DATA,
	SIMPLE_DATA_SANITIZED,
	MARKDOWN_DATA,
	MARKDOWN_DATA_SANITIZED,
	HTML_DATA,
	HTML_DATA_SANITIZED
} from "../../__mocks__/inputToSanitize";

describe("sanitize", () => {
	it("simple data", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));

		let result = new Sanitizer(SIMPLE_DATA, requestId).sanitize();
		expect(result).toBe(SIMPLE_DATA_SANITIZED);
	});
	it("markdown data", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));

		let result = new Sanitizer(MARKDOWN_DATA, requestId).sanitize();
		expect(result).toBe(MARKDOWN_DATA_SANITIZED);
	});
	it("HTML data", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));

		let result = new Sanitizer(HTML_DATA, requestId).sanitize();
		expect(result).toBe(HTML_DATA_SANITIZED);
	});
});
