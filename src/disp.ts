interface IService {
    id: number,
    service: string,
    des: string,
    dur: string,
    price: number,
    img: string,
}
const displayServices = (): void => {
    const tableBody = document.querySelector('table') as HTMLTableElement
    const services: IService[] = JSON.parse(localStorage.getItem("services") || "[]")
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
    })

}
const deleteService = (id: number): void => {
    if (confirm('Are you sure you want to delete this?')) {
        let services: IService[] = JSON.parse(localStorage.getItem("services") || "[]");
        services = services.filter(s => s.id !== id);
        localStorage.setItem("services", JSON.stringify(services))
        displayServices();
    }

}

window.onload = displayServices;