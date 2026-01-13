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
    const desInput = document.getElementById("des") as HTMLTextAreaElement;
    const durInput = document.getElementById("dur") as HTMLInputElement;
    const priceInput = document.getElementById("price") as HTMLInputElement;
    const imgInput = document.getElementById("img") as HTMLInputElement;

    const serviceErr=document.getElementById("serviceErr") as HTMLElement;
    const desErr=document.getElementById("desErr") as HTMLElement;
    const durErr=document.getElementById("durErr") as HTMLElement;
    const priceErr=document.getElementById("priceErr") as HTMLElement;

    serviceErr.textContent="";
    desErr.textContent="";
    durErr.textContent="";
    priceErr.textContent="";
    let isValid=true;

    if(serviceInput.value.trim()==="") {
        serviceErr.textContent="Service name is requird"
        isValid=false;
    }
    if(serviceInput.value.length<3){
        serviceErr.textContent="Service name required minimum 3 characters"
        isValid=false
    }
    if(desInput.value.trim()===""){
        desErr.textContent="Description is requird"
        isValid=false;
    }
    if(durInput.value.trim()===""){
        durErr.textContent="Duration is requird"
        isValid=false;
    }
    const priceValue=parseFloat(priceInput.value)
    if(isNaN(priceValue) || priceValue<0){
        priceErr.textContent="Please enter a valid price greater than 0"
        isValid=false
    }

    if (imgInput.files && imgInput.files[0]) {
        const file = imgInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target?.result as string;
            const newService: IService = {
                id: Date.now(),
                service: serviceInput.value.trim(),
                des: desInput.value.trim(),
                dur: durInput.value.trim(),
                price: priceValue,
                img: base64Image
            };
            const existingServices: IService[] = JSON.parse(localStorage.getItem("services") || "[]");
            existingServices.push(newService);
            localStorage.setItem("services", JSON.stringify(existingServices));
            alert("Services added successfully");
            window.location.href="disp.html";
            (document.getElementById("myForm") as HTMLFormElement).reset();
        }
        reader.readAsDataURL(file);
    }else{
        alert("Please select an image file")
    }


};


