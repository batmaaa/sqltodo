const pool = require('./connection');

async function  getStudetns(){
    const [students] = await pool.query(`select * from tab`,);
    return students
}

async function addStudent({name}){
    const data = await pool.query(`insert into tab(firstname) value('${name}')`);
    return data
}

async function deleteStudents({id}){
    const data = await pool.query(`DELETE FROM tab WHERE id = ${id};`);
    return data
}

async function updateStudents({name, id}){
    const data = await pool.query(`update tab set firstname='${name}'where id=${id}`)
    return data
}

module.exports ={
   getStudetns,
   addStudent,
   deleteStudents,
   updateStudents
}