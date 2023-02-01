function HomePage()
{
    console.log("Welcome to Home page . Executing home function handler")
}

function ReviewPage()
{
    console.log("Welcome to review page . Executing Review function handler")
}

exports.home_alias = HomePage;
exports.review_alias =  ReviewPage;
