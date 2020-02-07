import logger from "../logger/logger";
const S = require("string");
export class Sanitizer {
	private inputString: string;
	private requestId: number;

	constructor(inputString: string, requestId: number) {
		this.inputString = inputString;
		this.requestId = requestId;
	}
	sanitize(): string {
		const result = S(this.inputString)
			.stripTags()
			.stripPunctuation().s;

		logger.infoLog(this.requestId, result);
		return result;
	}
}
