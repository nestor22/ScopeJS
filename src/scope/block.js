const fruits = ()=>{
    //generacion del bloque para el ambito 
    if(true){
        //elementos con permisos de uso en la funcion 
        var fruits1 = 'aple';
        //let const no tienen permiso de ejecutarse fuera del bloque 
        let fruits2= 'banana';
        const fruits3='quiwi';
        //dentro del bloque nomas
        console.log(fruits2)
        console.log(fruits3)
        
    }

    console.log(fruits1)
}

fruits();

let x =1 
{
    let x =2 ;
    //este es valor 2 //local
    console.log(x)

}
//valor global 1
console.log(x)


//con variable var los codigos se heredan 
var x =1 
{
   var x =2 ;
    //este es valor 2 //local
    console.log(x)

}
//valor global 2
console.log(x)


const anotherFucntion = ()=>{
    for (var i=0 ; i<10 ; i++){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
}
//nos muestra el ultimo valor asignado por lo que da a 10
anotherFucntion();

const anotherFucntion2 = ()=>{
    for (let i=0 ; i<10 ; i++){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
}
//nos muestra el orden normal 
anotherFucntion2();
