"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getInfo = () => {
    const serviceInput = document.getElementById("service");
    const desInput = document.getElementById("des");
    const durInput = document.getElementById("dur");
    const priceInput = document.getElementById("price");
    const imgInput = document.getElementById("img");
    const serviceErr = document.getElementById("serviceErr");
    const desErr = document.getElementById("desErr");
    const durErr = document.getElementById("durErr");
    const priceErr = document.getElementById("priceErr");
    serviceErr.textContent = "";
    desErr.textContent = "";
    durErr.textContent = "";
    priceErr.textContent = "";
    let isValid = true;
    if (serviceInput.value.trim() === "") {
        serviceErr.textContent = "Service name is requird";
        isValid = false;
    }
    if (serviceInput.value.length < 3) {
        serviceErr.textContent = "Service name required minimum 3 characters";
        isValid = false;
    }
    if (desInput.value.trim() === "") {
        desErr.textContent = "Description is requird";
        isValid = false;
    }
    if (durInput.value.trim() === "") {
        durErr.textContent = "Duration is requird";
        isValid = false;
    }
    const priceValue = parseFloat(priceInput.value);
    if (isNaN(priceValue) || priceValue < 0) {
        priceErr.textContent = "Please enter a valid price greater than 0";
        isValid = false;
    }
    if (imgInput.files && imgInput.files[0]) {
        const file = imgInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target?.result;
            const newService = {
                id: Date.now(),
                service: serviceInput.value.trim(),
                des: desInput.value.trim(),
                dur: durInput.value.trim(),
                price: priceValue,
                img: base64Image
            };
            const existingServices = JSON.parse(localStorage.getItem("services") || "[]");
            existingServices.push(newService);
            localStorage.setItem("services", JSON.stringify(existingServices));
            alert("Services added successfully");
            window.location.href = "disp.html";
            document.getElementById("myForm").reset();
        };
        reader.readAsDataURL(file);
    }
    else {
        alert("Please select an image file");
    }
};
//# sourceMappingURL=add.js.map