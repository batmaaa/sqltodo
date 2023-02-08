const express = require('express');
const router = express.Router();
const {getStudetns, addStudent, deleteStudents, updateStudents} = require('../db_utils');

router.get('/', async(req,res)=>{
    const students = await getStudetns();
       res.send(students);
    })

router.post('/',async(req,res)=>{
    const data = await addStudent(req.body);
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await deleteStudents(req.params)
    res.send(data)
})

router.put('/', async (req, res)=>{
    const data = await updateStudents(req.body)
    res.send(data)
})

module.exports = router