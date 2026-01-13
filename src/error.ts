function divide(a:number,b:number):number{
    if(b==0){
        throw new Error("Not divided by 0")
    }
    return a/b;
}
try{
    const result=divide(10,0);
    console.log(result);
}catch(error){
    if(error instanceof Error)
    console.error("Error:",error.message)
}