// without parameters
function printNames()
{
    console.log("Sara");
    console.log("Saranya");
}

printNames();
console.log("calling a parameter less function with params:");
printNames("A","B");

//with parameters

function printName(value1,value2,value3)
{
    console.log(value1);
    console.log(value2);
    console.log(value3);
}

printName("Ram", "Bhim", "Syam");
//printName(34,35,36);
//printName(true,false,true);
console.log("calling parametrized function with less params:")
printName('A',34);
console.log("calling parametrized function without any params:")
printName();


function multiPly(a,b)
{
    return a*b;
}

console.log(multiPly(34,25));

console.log("Arrow functions")
//when u have multiple parameters"
printNames=()=>{
    console.log(a*b)
}
add =(a,b)=>console.log(a+b);
add(45,32);