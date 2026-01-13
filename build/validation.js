"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//manual validation
function isUser(data) {
    return (typeof data === "object" &&
        data !== "null" &&
        typeof data.id === "number" &&
        typeof data.name === "string");
}
const input = { id: 1, name: "Alice" };
if (isUser(input)) {
    console.log(input.name);
}
//assertion function
function assertIsUser(data) {
    if (typeof data.id !== "number" || typeof data.name !== "string") {
        throw new Error("Invalid data");
    }
}
assertIsUser(input);
console.log(input.id);
//# sourceMappingURL=validation.js.map