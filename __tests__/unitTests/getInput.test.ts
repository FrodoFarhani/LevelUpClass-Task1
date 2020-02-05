let stdin = require("mock-stdin").stdin();
import { GetInputString } from "../../src/stringSanitizer/getInput";
import {
	SIMPLE_DATA,
	MARKDOWN_DATA,
	HTML_DATA
} from "../../__mocks__/inputString";

describe("getInput", () => {
	beforeEach(() => {
		stdin = require("mock-stdin").stdin();
	});
	it("returns correct simple data input", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));
		process.nextTick(() => {
			stdin.send(`${SIMPLE_DATA}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		let result = await new GetInputString(requestId).inputString;
		expect(result).toBe(SIMPLE_DATA);
	});
	it("returns correct markdown data input", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));
		process.nextTick(() => {
			stdin.send(`${MARKDOWN_DATA}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		let result = await new GetInputString(requestId).inputString;
		expect(result).toBe(MARKDOWN_DATA);
	});
	it("returns correct HTML data input", async () => {
		const requestId = Math.floor(Math.random() * Math.floor(1000));

		process.nextTick(() => {
			stdin.send(`${HTML_DATA}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		let result = await new GetInputString(requestId).inputString;
		console.log("hyml:", HTML_DATA);

		expect(result).toBe(HTML_DATA);
	});
});
