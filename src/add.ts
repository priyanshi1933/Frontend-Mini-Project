interface IService {
    id: number,
    service: string,
    des: string,
    dur: string,
    price: number,
    img: string,
}
const getInfo = (): void => {
    const serviceInput = document.getElementById("service") as HTMLInputElement;
    const desInput = document.getElementsByName("des")[0] as HTMLTextAreaElement;
    const durInput = document.getElementById("dur") as HTMLInputElement;
    const priceInput = document.getElementById("price") as HTMLInputElement;
    const imgInput = document.getElementById("img") as HTMLInputElement;
    if (imgInput.files && imgInput.files[0]) {
        const file = imgInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target?.result as string;
            const newService: IService = {
                id: Date.now(),
                service: serviceInput.value,
                des: desInput.value,
                dur: durInput.value,
                price: parseFloat(priceInput.value),
                img: base64Image
            };
            const existingServices: IService[] = JSON.parse(localStorage.getItem("services") || "[]");
            existingServices.push(newService);
            localStorage.setItem("services", JSON.stringify(existingServices));
            alert("Services added successfully");
            (document.getElementById("myForm") as HTMLFormElement).reset();
        }
        reader.readAsDataURL(file);
    }else{
        alert("Please select an image file")
    }


};

