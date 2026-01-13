interface User {
    id: number,
    name: string
}
//manual validation
function isUser(data: any): data is User {
    return (
        typeof data === "object" &&
        data !== "null" &&
        typeof data.id === "number" &&
        typeof data.name === "string"
    )

}
const input: unknown = { id: 1, name: "Alice" };
if (isUser(input)) {
    console.log(input.name)
}

//assertion function
function assertIsUser(data:any):asserts data is User{
    if(typeof data.id!=="number" || typeof data.name!=="string"){
        throw new Error("Invalid data");
    }
}
assertIsUser(input)
console.log(input.id)