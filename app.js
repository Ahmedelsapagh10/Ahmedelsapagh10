var createError = require('http-errors');
var express = require('express');
const cors=require('cors')
const mongoose=require('mongoose')
require("dotenv").config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ProductRouter=require('./routes/ProductsRouter')
const ProductRouter2=require('./routes/Product2')
const ProductRouter3=require('./routes/Product3')
const ProductRouter4=require('./routes/Product4')
const ProductRouter5=require('./routes/Product5')
const ProductRouter6=require('./routes/Product6')
const search=require('./routes/search')




//mongodb://localhost:27017/Project-API

var path=require('path')

var app = express();
app.use(cors())

mongoose.connect(process.env.MONGO_URL ,(err)=>{
  if(err){
    console.log('Error Happen')  
    return
  }else{
    console.log(process.env.MONGO_URL)
    console.log('DataBase Connectrd...')
  }
});
//json >>We need res as Json
//urlecoded>> to make Express extract data from body
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//app.use(express.static(path.join(__dirname,'productimages')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',ProductRouter);
app.use('/products2',ProductRouter2);
app.use('/products3',ProductRouter3);
app.use('/products4',ProductRouter4);
app.use('/products5',ProductRouter5);
app.use('/products6',ProductRouter6);
app.use('/search',search);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message:err.message
  });
});

module.exports = app;
