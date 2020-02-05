let stdin = require("mock-stdin").stdin();
import { GetInputString } from "../../src/stringSanitizer/getInput";
import DATA_SAMPLE from "../../__mocks__/inputString";

describe("getInput", () => {
	beforeEach(() => {
		stdin = require("mock-stdin").stdin();
	});
	it("returns correct simple data input", async () => {
		process.nextTick(() => {
			stdin.send(`${DATA_SAMPLE}\r`);
		});
		process.nextTick(() => {
			stdin.end();
		});

		await new GetInputString().inputString.then(result => {
			expect(result).toBe(DATA_SAMPLE);
		});
	});
});
