import logger from "../logger/logger";
const S = require("string");
export class Sanitizer {
	private inputString: string;
	private requestId: number;

	constructor(inputString: string, requestId: number) {
		this.inputString = inputString;
		this.requestId = requestId;
	}
	sanitize(): object {
		const result = S(this.inputString)
			.stripTags()
			.stripPunctuation().s;
		const endPointObject = {
			userId: 1,
			id: this.requestId,
			title: "Sanitizer",
			body: result
		};
		logger.infoLog(this.requestId, result);
		return endPointObject;
	}
}
