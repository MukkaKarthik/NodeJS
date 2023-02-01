/*  var http_createdVariable =  require("http");
http_createdVariable.createServer(function(request,response)
{

    response.writeHead(200,{"Context-Type" : "text/plain"});
    response.write("Welcome to HTTP server programming extending javascript function");
    response.end();
}).listen(3452);  */


/* 

//Event Handlers
 var Events_Variable = require("events");
var EventEmitter_Variable = new Events_Variable.EventEmitter();

var RingBell = function()
{
    console.log("Door bell is ringing . Customer is waiting");
}

EventEmitter_Variable.on("DoorBell",RingBell);


EventEmitter_Variable.on("CustomerReceived",function(message)
{
    console.log(message);
    console.log("Customer paid the bill . Amount transferred to account");
})
EventEmitter_Variable.emit("DoorBell");
EventEmitter_Variable.emit("CustomerReceived","Welcome");
 

 */


//Synchronous and Asynchronous data 
/*  var fs_variable = require("fs");
fs_variable.readFile("File1.txt",function(error1,data1)
{
    if(error1)
    {
        console.log(error1);
    }
    else
    {
        console.log("Message receiving asynchronously = " + data1.toString());
    }
});

var Data2 = fs_variable.readFileSync("File1.txt");
    
    console.log("Message receiving synchronously = " + Data2.toString());
        
console.log("This is the end "); */
 
/* 

//Read Stream
var fs_variable1 = require("fs");
var ReadStream = fs_variable1.createReadStream("File1.txt");
var emptyData = "";
//ReadStream.setEncoding("UTF8");

ReadStream.on("data",function(chunk)
{
emptyData+= chunk;
});

ReadStream.on("end",function()
{
    console.log(emptyData);
})

//Write Stream 

var writeData = "Data is written into file using writeData variable";
var WriteStream = fs_variable1.createWriteStream("File2.txt");
//WriteStream.write(writeData,"UTF8");
WriteStream.end();
WriteStream.on("finish",function()
{
    console.log("This writing part is done");
});
 


//Read Write pipes 
var fs_variable2 = require("fs");
var ReadStream1 = fs_variable2.createReadStream("Input.txt");
var WriteStream1 = fs_variable2.createWriteStream("Ouput.txt");
ReadStream1.pipe(WriteStream1);
 */