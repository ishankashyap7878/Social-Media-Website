const express= require('express');
const app=express();
const port=8002;
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.static('assets'));
//use express router
app.use('/',require('./routes'));
//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

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