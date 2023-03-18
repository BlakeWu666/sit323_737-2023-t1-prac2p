const express = require('express');
const app = express();

let students = [
    {studentId: 220344642, studentName : "LidongWu", course : "Bachelor of IT", major : "App development"},
    {studentId: 123456789, studentName : "Abc", course : "Bachelor of IT", major : "App development"},
    {studentId: 456788123, studentName : "FDF", course : "Bachelor of IT", major : "App development"},
]

app. get('/', (req,res) => {
    res.json(students);
})

app.get('/', (req,res)=>{
    
    res.send (students);
})

app.listen(3000, console.log('App Listening to port 3000'));

