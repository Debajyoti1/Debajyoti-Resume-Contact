const express=require('express')
const router=express.Router()

const HomeController=require('../controllers/homeController')
const FormController=require('../controllers/submitFormController')


router.get('/',HomeController.homePage)


module.exports=router
