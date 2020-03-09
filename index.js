const express= require('express');
const app=express();
const port=8000;


app.listen(port,function(err)
{
    if(err)
    {
        // interpolation function
        console.log(`error in running the server: ${err}`);
    }
    // interpolation function
    console.log(`Server is running on port: ${port}`);
});