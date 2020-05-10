const express= require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8002;
const mongoose=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('assets'));

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
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