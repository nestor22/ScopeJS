const buildCount = (i)=>{
    let count = i;
    const dispalyCount = ()=>{
        console.log(count++)
    }
    return dispalyCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

