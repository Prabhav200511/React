const express =  require('express');
const app =  express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.get("/",(reqest,response)=>{
    response.send("Hello World");
})

app.post('/api/cars',(request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted succesfully")
})