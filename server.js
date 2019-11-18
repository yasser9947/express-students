const express = require('express')
const app = express()
const path  =require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const methodeOverriad = require('method-override')

// connect to mongoose
mongoose.connect('mongodb://localhost/', {useNewUrlParser : true , useUnifiedTopology: true } )
.then(()=> console.log('Mongodb is running'),(err)=> console.log(err) )

 //data 
 

 app.set('view engine', 'ejs');
 app.use(express.static(path.join(__dirname , "public" )))

 

 //body parsle 
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(methodeOverriad('_method'))
app.use('/api/students' , require('./routes/api/students'))






app.listen(4300 , () => console.log(`server is runnig`));


