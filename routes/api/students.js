const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Students = require('../../models/Student').Student

// get all students
router.get('/', (req , res) =>{


    Students.find()
    .then(data =>{
      res.render('index' , {students : data })
    })
   
})

// new student 
router.get('/new' , (req, res) =>{

    res.render('new')
})
// Post 
router.post("/" , (req , res) =>{

    var newStudent = req.body

    var student = new Students(newStudent) 
    student.save()
    .then((data) =>{
        console.log(data)
        res.redirect("/api/students")
    }).catch(err => console.log(err))



})

// get one student 
router.get("/:id" , (req , res) =>{

// res.send(req.params.id)
Students.findById(req.params.id)
.then(data =>{
    res.render('show' , {student : data})
})
})

// delete 
router.delete('/:id' ,(req , res)=>{

    Students.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/api/students')
    })
})





module.exports = router

