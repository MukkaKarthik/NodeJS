    function routeHere(pathname,handle)
    {
        console.log("File has been routed to following path\n" + pathname);

        if(typeof handle[pathname] == "function")
        {
            handle[pathname]();
        }
        else
        {
            console.log("No handler for this particular path = " + pathname);
        }
    }

    exports.routeHere_alias = routeHere;


