const express= require('express');
const app=express();
const port=8001;
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
//use express router
app.use('/',require('./routes'));
app.use(express.static('assets'));
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