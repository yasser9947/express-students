const express = require('express')
const app = express()
const path  =require('path')
 //data 

//body parsle 
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/students' , require('./routes/api/students'))






app.listen(4300 , () => console.log(`server is runnig`));


// app.use(express.static(path.join(__dirname , "public")))
