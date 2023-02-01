function RelayRace()
{
    console.log("This method is starting relay race");
}

function Swimming()
{
    console.log("This method is Swimming ");
}

function Cycling()
{
    console.log("This method is Cycling");
}



module.exports = {

    Walking: function()
    {
        console.log("This activity is walking");
    },

    Sleeping: function()
    {
        console.log("This activity is Sleeping");
    },

    RunningDaily: function()
    {
        console.log("This activity is RunningDaily");
    },

    StartSwimming: Swimming,

    StartCycling: Cycling,


}