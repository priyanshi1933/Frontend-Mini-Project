"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getInfo = () => {
    const serviceInput = document.getElementById("service");
    const desInput = document.getElementById("des");
    const durInput = document.getElementById("dur");
    const priceInput = document.getElementById("price");
    const imgInput = document.getElementById("img");
    if (imgInput.files && imgInput.files[0]) {
        const file = imgInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target?.result;
            const newService = {
                id: Date.now(),
                service: serviceInput.value,
                des: desInput.value,
                dur: durInput.value,
                price: parseFloat(priceInput.value),
                img: base64Image
            };
            const existingServices = JSON.parse(localStorage.getItem("services") || "[]");
            existingServices.push(newService);
            localStorage.setItem("services", JSON.stringify(existingServices));
            alert("Services added successfully");
            document.getElementById("myForm").reset();
        };
        reader.readAsDataURL(file);
    }
    else {
        alert("Please select an image file");
    }
};
//# sourceMappingURL=add.js.map