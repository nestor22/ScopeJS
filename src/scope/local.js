const helloWorl=()=>{
    const hello = 'hello world';
    console.log(hello);
}

helloWorl();
console.log(hello)//trow error 


var scope= 'i am global';

const functionScope=()=>{
    var scope = 'i am just a local';
    const func=()=>{
        return scope;
    }

    console.log(func());
}

functionScope();