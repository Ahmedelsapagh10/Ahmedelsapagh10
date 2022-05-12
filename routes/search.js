var express = require('express');
const mongoose = require('mongoose')
const check_auth=require('../middleWare/check_auth')

var router = express.Router();

const ProductFunction=require('../controller/productController')
//injection
router.get('/injection/:key',check_auth,ProductFunction.s_injection)

router.get('/syrup/:key',check_auth,ProductFunction.s_syrup)

router.get('/tables/:key',check_auth,ProductFunction.s_tables)

router.get('/capsule/:key',check_auth,ProductFunction.s_capsule)

router.get('/eyedrop/:key',check_auth,ProductFunction.s_eyedrop)

router.get('/ointmen/:key',check_auth,ProductFunction.s_ointmen)



module.exports=router