"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
/* eslint-disable @typescript-eslint/class-name-casing */
class getInputString {
    async inputString() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const promise = new Promise(resolve => {
            let input = "";
            rl.question("\r\nPlease enter your html code:\r\n", (recievedString) => {
                input += recievedString;
            });
            rl.on("line", (recievedString) => {
                input += "\r\n";
                input += recievedString;
            });
            rl.on("close", () => {
                console.log("\r\n\r\n **********    thanks !    **********");
                resolve(input);
                rl.close();
            });
        });
        return promise.then(recievedString => {
            return recievedString;
        });
    }
}
exports.getInputString = getInputString;
//# sourceMappingURL=getInput.js.map