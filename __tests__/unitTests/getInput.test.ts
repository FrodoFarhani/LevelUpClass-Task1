let stdin = require("mock-stdin").stdin();
const INPUT = require("../../__mocks__/inputString.json");
import { GetInputString } from "../../src/stringSanitizer/getInput";
//import  DATA_SAMPLE  from "../../__mocks__/inputString";

describe("getInput", () => {
	beforeEach(() => {
		stdin = require("mock-stdin").stdin();
		console.log(INPUT.DATA_SAMPLE);
	});
	it("returns correct simple data input", async () => {
		process.nextTick(() => {
			stdin.send(`${INPUT.DATA_SAMPLE}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});
		new GetInputString().inputString().then(result => {
			expect(result).toBe(INPUT.DATA_SAMPLE);
		});
	});
});
