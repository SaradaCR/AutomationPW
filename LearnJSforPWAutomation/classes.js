class calCulator{

    x=10;
    y=15;

    add(num1,num2){
        console.log("addition: of "+num1 +"&"+num2+"="+ (num1+num2))
    }

 add(num1,num2){
        console.log("addition: of "+num1 +"&"+num2+"="+(num1+num2))
    }

   sub(num1,num2){
    console.log("substraction: of "+num1 +"&"+num2+"="+ (num1-num2))
    
   } 
   multi(num1,num2){
    console.log("multiplication: of "+num1 +"&"+num2+"="+ (num1*num2))
    
   } 
   div(num1,num2){
    console.log("division: of "+ num1 + " and " + num2 + " = " + (num1/num2))
    
   } 
}
const cal=new calCulator();
cal.add(23,43);
cal.div(15,3);
cal.multi(12,5);
cal.add(25,25);
cal.div(10,10);
