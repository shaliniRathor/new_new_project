const express= require("express");
const router= express.Router();
const controllers= require("./myyycontrollers")

router.get('/home', controllers.home)

router.get('/menu', controllers.menu)

router.get('contact_us', controllers.contact_us) 

router.get('/help', controllers.help)

router.get('/lists', controllers.lists)

router.get('/newArrivals', controllers.newArrivals)

router.get('/addToCart/:user_Id/:phone_number', controllers.addToCart)




module.exports=router




    





// router.get(`/login/:userId/:email_Id/:phone_number`,(req,res)=>{
//     const information = req.params
//     console.log(information);

// })