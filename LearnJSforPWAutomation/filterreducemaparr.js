 
//filter
numarr=[10,19,6,9,12,42];
console.log("number array is:"+numarr);
 evenarr=numarr.filter(function(element)
{
    return element%2==0; //returns only the elements for which (satisfies) the condition is true
}
)
console.log("array with only even numbers using filter on condition element%2==0:"+evenarr)
//map()
 maparr=numarr.map(function(element)
{
    return element%2==0; //returns the result of each element after applying condition
}
)
console.log("map function on numarr on condition element%2==0:"+maparr)

