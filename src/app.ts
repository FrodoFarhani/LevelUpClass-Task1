import { GetInputString } from "./stringSanitizer/getInput";

new GetInputString().inputString().then(res => {
	console.log("res app:", res);
});
