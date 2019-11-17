const express = require('express')
const router = express.Router()
const students = require('../../studentsData')

router.get('/' , (req , res) =>{

    res.json(students)

})

router.get("/:id" ,(req , res) =>{
    let flag = students.some(student => student.id == req.params.id)
 
    if (flag){
        let student = students.filter(student =>{
       
            return student.id == req.params.id
    })
        res.json(student)
    }else{
        res.status(400).json({msg : "id not found"})
    }
       

})
module.exports = router