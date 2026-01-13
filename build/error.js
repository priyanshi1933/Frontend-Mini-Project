"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function divide(a, b) {
    if (b == 0) {
        throw new Error("Not divided by 0");
    }
    return a / b;
}
try {
    const result = divide(10, 0);
    console.log(result);
}
catch (error) {
    if (error instanceof Error)
        console.error("Error:", error.message);
}
//# sourceMappingURL=error.js.map