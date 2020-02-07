import { MockService } from "./../../__mocks__/mockService";
import { GetInputString } from "../../src/stringSanitizer/getInput";
import { Sanitizer } from "../../src/stringSanitizer/sanitizer";
let stdin = require("mock-stdin").stdin();
import {
	SIMPLE_DATA,
	SIMPLE_DATA_SANITIZED,
	MARKDOWN_DATA,
	MARKDOWN_DATA_SANITIZED,
	HTML_DATA,
	HTML_DATA_SANITIZED
} from "../../__mocks__/inputToSanitize";

describe("All functions", () => {
	beforeEach(() => {
		stdin = require("mock-stdin").stdin();
	});
	it("should be run correctly for simple data", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));
		process.nextTick(() => {
			stdin.send(`${SIMPLE_DATA}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		const getInputString = await new GetInputString(requestId).inputString;
		const sanitizedInput = new Sanitizer(getInputString, requestId).sanitize();
		const mockService = new MockService(sanitizedInput);
		const result = await mockService.post();

		expect(getInputString).toBe(SIMPLE_DATA);
		expect(sanitizedInput).toBe(SIMPLE_DATA_SANITIZED);
		expect(result.data).toEqual(sanitizedInput);
		expect(result.mockAxios).toHaveBeenCalledTimes(1);
	});
	it("should be run correctly for markdown data", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));
		process.nextTick(() => {
			stdin.send(`${MARKDOWN_DATA}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		const getInputString = await new GetInputString(requestId).inputString;
		const sanitizedInput = new Sanitizer(getInputString, requestId).sanitize();
		const mockService = new MockService(sanitizedInput);
		const result = await mockService.post();

		expect(getInputString).toBe(MARKDOWN_DATA);
		expect(sanitizedInput).toBe(MARKDOWN_DATA_SANITIZED);
		expect(result.data).toEqual(sanitizedInput);
		expect(result.mockAxios).toHaveBeenCalledTimes(2);
	});
	it("should be run correctly for HTML data", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));
		process.nextTick(() => {
			stdin.send(`${HTML_DATA}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		const getInputString = await new GetInputString(requestId).inputString;
		const sanitizedInput = new Sanitizer(getInputString, requestId).sanitize();
		const mockService = new MockService(sanitizedInput);
		const result = await mockService.post();

		expect(getInputString).toBe(HTML_DATA);
		expect(sanitizedInput).toBe(HTML_DATA_SANITIZED);
		expect(result.data).toEqual(sanitizedInput);
		expect(result.mockAxios).toHaveBeenCalledTimes(3);
	});
});
