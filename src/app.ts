import { GetInputString } from "./stringSanitizer/getInput";

const t = new GetInputString();
t.inputString.then(res => {
	console.log("res:", res);
});
