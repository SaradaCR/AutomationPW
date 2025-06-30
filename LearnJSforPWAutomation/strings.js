// str=" ", str=' ', str=` `

str="Sara is from a 'village'";
console.log("length of the string:"+str+" is: "+str.length);

str1="and";
str3=str.concat(str1);
console.log(str3);
str4="  hello";
console.log("trimming the string "+str4+":" +str4.trim()+" space at the beginning is removed" );
 str5="asdadrefgt";
 str6=str5.toUpperCase();
 console.log("converting the string:["+str5+"]to upper case=>"+str6);
 console.log("converting the string:["+str6+"] back to lower case=>"+str6.toLowerCase());
str7="learningjs";
 console.log("printing the sub string of the string ["+str7+"]=>"+str7.substr(4));//give the string from 4th index
 console.log("printing the sub string of the string ["+str7+"]=>"+str7.substr(0,4));// gives 4 letters from 0 index
 console.log("printing the sub string of the string ["+str7+"]=>"+str7.substr(4,2));//goves 2 letters from 4th index
 str8="Ramanna\n"+"Channappa"; // \n gives new line
 
 console.log(str8);
str9="Amaravathi";
str10=`Capital city of Andhra is:${str9}`;
console.log(str10)
//strings are immutable means we cannot change/modify the strings below i the example:

str11="Kavascript" //need to change first letter
str11[0]='J';
console.log(str11); // gives same string only, we cannot change

str12="1000" //=> 1000 is string

str12=Number("1000");//=>here 1000 is number

const strs = 'automation';
const strt=`Playwright ${strs}`;
console.log("new string is: "+strt);

const multiLineString=`I am a house wife 
and I just need to 
restart my career`;

console.log("MultilineString is: "+multiLineString)
