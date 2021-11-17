const anotherFucntion2 = ()=>{
    for (let i=0 ; i<10 ; i++){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
}
//nos muestra el orden normal 
anotherFucntion2();
