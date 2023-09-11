const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port =3001;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + '/triangle.html');
})

app.post('/',(req,res)=>{
    const radius = req.body.radius;
    const calRadius = (Math.PI*radius*radius).toFixed(2);
   
    const height = req.body.height;
    const width = req.body.width;
    const calTringle = (height*width).toFixed(0);
    res.send(`<h1>Circle Calculation :${calRadius} <br/>
    Triangle calculation : ${calTringle}
    </h1>`);
})

// app.post('/',(req,res)=>{
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`welcome to the ${name} and Age ${age}`);
// })

// app.get('/userid/:id/age/:age',(req,res)=>{
//     const {id,name,age} = req.params;
    
//     res.send(`<h1> Student Id is ${id} and age is ${age}</h1>`)
    
//     res.end();
// })
// app.get('/',(req,res)=>{
//     const name =req.header('name');
//     const age =req.header('age');
//     const id =req.header('id');
    
    
//     res.send(`<h1> Student Name is ${name} and age is ${age} and ID is : ${id}</h1>`)
    
//     res.end();
// })

// app.get('/register',(req,res)=>{
//     res.send('<h1>This is Register route</h1>')
//     res.end();
// })
// app.get('/login',(req,res)=>{
//     res.send('<h1>This is Login route</h1>')
//     res.end();
// })
app.get('*',(req,res)=>{
    res.send('<h1>404!! not Found</h1>')
    res.end();
})

app.listen(port,()=>{
    console.log(`The server is running http://localhost:${port}`)
})