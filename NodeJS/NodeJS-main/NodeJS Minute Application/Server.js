var HTTP_variable = require("http");
const { url } = require("inspector");
var URL_variable = require("url");
const { routeHere_alias } = require("./RoutingModule");

function StartServer_wrappedVariable(routeHere,handle) {
  function onRequest_toServer(Request, response) {
    response.writeHead(200, { "Content-Type": "HTML" });
    response.write("<h1>Welcome to Server Minute based application programming.This is from Server Module" + 
    "<br>Start programming in this application <br> Value keeps hanging frequently</h1>");
    
    var pathname = URL_variable.parse(Request.url).pathname;
    routeHere_alias(pathname,handle);
    console.log("Request received");
    response.end();
  }

  HTTP_variable.createServer(onRequest_toServer).listen(4675);

  console.log("Server started at port : 4675");
}

exports.StartServer_wrappedVariable_AliasValue = StartServer_wrappedVariable;
