const express = require("express");
const indexRouter = require('./rooters');
const studentsRouter = require('./rooters/students')
const app = express();

app.use(express.json())

//router
app.use(['/','index'],indexRouter);
app.use('/students',studentsRouter);


app.listen(3000, async ()=>{
 console.log("server listen 3000port",)
})
