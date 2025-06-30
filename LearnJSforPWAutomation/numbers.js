
console.log("5"-1) // gives 4 , string will get converted into number "Cohersion" happens hereconsole.log("5"-1)
console.log("5"+11) //511 concat

console.log(4**5);

//working with big integer
num1=123456789087765
num2=1;
console.log(num1+num2)

num3=123456789087765898
num4=1;
console.log(num3+num4)// gives 123456789087765900 but actually it is 123456789087765899

//we nee to use 'n' in order to get correct result

num5=123456789087765898n
num6=1n;
console.log(num5+num6);// give 123456789087765899n