const express = require('express')
const app = express()
const path  =require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

// connect to mongoose
mongoose.connect('mongodb://localhost/', {useNewUrlParser : true , useUnifiedTopology: true } )
.then(()=> console.log('Mongodb is running'),(err)=> console.log(err) )

 //data 

 app.set('view engine', 'ejs');
//body parsle 
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/students' , require('./routes/api/students'))






app.listen(4300 , () => console.log(`server is runnig`));


// app.use(express.static(path.join(__dirname , "public")))
