const express=require('express')

const router=express.Router();

const homeController=require('../controllers/home_controller');
console.log('router loaded');


router.get('/',homeController.home);
//anything that comes for users will be forwarded to users
router.use('/users',require('./users'));
//for anything other
//router.use('/routerName',require('./routerfile'));

module.exports=router;