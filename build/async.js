"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP Error Status:${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        throw error;
    }
}
fetchUser(10).then(data => {
    console.log("User Data Received:", data);
});
function fetchUsers(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error Status:${response.status}`);
        }
        return response.json();
    })
        .catch(error => {
        console.error("Failed to fetch data", error);
        return [];
    });
}
fetchUsers(1).then(data => {
    console.log("User Data Received:", data);
});
//# sourceMappingURL=async.js.map