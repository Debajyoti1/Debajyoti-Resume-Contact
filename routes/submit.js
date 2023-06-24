const express=require('express')
const router=express.Router()

const FormController=require('../controllers/submitFormController')


router.all('/',FormController.formSubmit)


module.exports=router
