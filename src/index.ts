
import express from "express";

const app = express();
const port =  3000;


//add one endpoint 

app.get('/hello', (req,res)=>{
    res.send(" Hello World");
})

app.listen(port, ()=>{
    console.log(`Listening on port  ${port}`);
})