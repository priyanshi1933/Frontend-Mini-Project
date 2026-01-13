interface IService {
    id: number;
    service: string,
    des: string,
    dur: string,
    price: number,
    img: string
}

const serviceInput = document.getElementById("service") as HTMLInputElement;
const desInput = document.getElementById("des") as HTMLTextAreaElement;
const durInput = document.getElementById("dur") as HTMLInputElement;
const priceInput = document.getElementById("price") as HTMLInputElement;
const imgInput = document.getElementById("img") as HTMLInputElement;

const urlParams = new URLSearchParams(window.location.search);
const serviceID = parseInt(urlParams.get('id') || "0");

window.onload = () => {
    const services: IService[] = JSON.parse(localStorage.getItem("services") || "[]")
    const serviceToEdit = services.find(s => s.id === serviceID)
    if (serviceToEdit) {
        serviceInput.value = serviceToEdit.service;
        desInput.value = serviceToEdit.des;
        durInput.value = serviceToEdit.dur;
        priceInput.value = serviceToEdit.price.toString();
    }
}
const updateService = (): void => {
    let services: IService[] = JSON.parse(localStorage.getItem("services") || "[]");
    const index = services.findIndex(s => s.id === serviceID)

    if (index !== -1) {
        const currentService = services[index];
        if (currentService) {
            const processUpdate = (imageHtml: string) => {
                services[index] = {
                    id: serviceID,
                    service: serviceInput.value,
                    des: desInput.value,
                    dur: durInput.value,
                    price: parseFloat(priceInput.value),
                    img: imageHtml
                }
                localStorage.setItem("services", JSON.stringify(services))
                alert("Services edited successfully")
                window.location.href = "disp.html"
            }
            if (imgInput.files && imgInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target?.result) {
                        processUpdate(e.target.result as string)
                    }
                }
                reader.readAsDataURL(imgInput.files[0])
            } else {
                processUpdate(services[index]!.img);
            }

        }

    }
}