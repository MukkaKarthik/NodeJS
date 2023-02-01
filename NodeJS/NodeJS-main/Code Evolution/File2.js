/*  function printStuff(stuff)
{
console.log(stuff);
} 

printStuff('Print stuff as "Welcome to programming"');

//Assigning functions to variables 

 var PrintValue_fromFunction = function(stuff)//anonymous function 
{
    console.log(stuff);
}
 
PrintValue_fromFunction("stuff from function used as a variable");

 function mainFunction(anotherFunction,value)
{

    anotherFunction(value);
}
 
mainFunction(PrintValue_fromFunction,"Hello from PrintValue_fromFunction function");//Hello from PrintValue_fromFunction function
 




//Passing direct anonymous function 
 mainFunction(function(stuff)
{
    console.log(stuff);
},"Hello from passing direct anonymous function");//Hello from passing direct anonymous function
 
 */






//console.log(__filename);//C:\Users\Mukka Karthik\Pictures\Installed Tools and Softwares\CSS_Starter_Files\Node JS\File2.js
//console.log(__dirname);


function PrintTimeOut()
{
    console.log("This is from PrintTimeOut function statement");
}

setTimeout(PrintTimeOut, 1000);//PrintTimeOut function is called only once console after 5 seconds 
 


/*  function PrintSetInterval()
{
    console.log("This is from PrintSetInterval function statement");
}

setInterval(PrintSetInterval, 5000);//PrintTimeOut function is called on console after every 5 seconds 
//Press Ctrl+C to exit from execution 
 */



/*  console.log("User 1 made a request");
setTimeout(callBack,5000);

console.log("User 2 made a request");
setTimeout(callBack,5000);

console.log("User 3 made a request");
setTimeout(callBack,5000);


function callBack()
{
console.log("Database operation is performing . Wait for 5 mins");
console.log("Database operation successfully performed and User is served");
} 

 */
