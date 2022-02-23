"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tl = require("azure-pipelines-task-lib/task");
function run() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        try {
            const inputString = tl.getInput('samplestring', true);
            if (inputString == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Hello', inputString);
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();
