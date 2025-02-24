const express=require("express")
const app=express()
const PORT=3000

app.use(express.json())

data=[]

app.get("/",(req,res)=>{
    res.send("Server connected succesfully")
}) 

app.get("/data",(req,res)=>{
    const {email,password}=req.body
})

app.post("/data",(req,res)=>{
    if (!email) {
        res.status(400).json({Error:"Email cannot be empty"})
    }
    else {
        res.status(200).json({message:"Email recived"})
    }
    if (!password) {
        res.status(400).json({Error:"Password cannot be empty"})
    } 
    else {
        res.status(200).json({message:"Password recieved"})
    }
})


app.listen(PORT,()=>{
    console.log(`Connected to port${PORT}`)
})