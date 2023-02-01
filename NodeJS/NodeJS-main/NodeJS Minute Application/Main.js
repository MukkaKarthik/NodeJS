var ImportServer_module = require("./Server");
var Router_Variable = require("./RoutingModule");
var handler_variable = require("./handler");


var handle={};

handle["/"]=handler_variable.review_alias;
handle["/homeEntry"] = handler_variable.home_alias;
handle["/ReviewEntry"] = handler_variable.review_alias;

ImportServer_module.StartServer_wrappedVariable_AliasValue(Router_Variable.routeHere_alias,handle);

