var hello = 'hello';

let world = 'hello world';


const helloWorld = 'Hello World!';


const anotherFunction = ()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}

anotherFunction();

//esta es una mala practica 
const helloWorld = ()=>{
    globalVar = 'im global'
}
helloWorld();
console.log(globalVar);


const anotherFunction2=()=>{
    var localVar = globalVar = 'Im a global'

}
console.log(globalVar);


