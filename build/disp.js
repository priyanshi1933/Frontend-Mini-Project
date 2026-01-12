"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayServices = () => {
    const tableBody = document.querySelector('table');
    const services = JSON.parse(localStorage.getItem("services") || "[]");
    const rows = tableBody.rows.length;
    for (let i = rows - 1; i > 0; i--) {
        tableBody.deleteRow(i);
    }
    services.forEach((e) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${e.service}</td>
            <td>${e.des}</td>
            <td>${e.dur}</td>
            <td>${e.price}</td>
            <td><img src="${e.img}" width=70 height=70></td>
            <td><button class="btn btn-warning btn-sm" onclick="editService(${e.id})">Edit</button></td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteService(${e.id})">Delete</button></td>
        `;
    });
};
const deleteService = (id) => {
    if (confirm('Are you sure you want to delete this?')) {
        let services = JSON.parse(localStorage.getItem("services") || "[]");
        services = services.filter(s => s.id !== id);
        localStorage.setItem("services", JSON.stringify(services));
        displayServices();
    }
};
window.onload = displayServices;
//# sourceMappingURL=disp.js.map