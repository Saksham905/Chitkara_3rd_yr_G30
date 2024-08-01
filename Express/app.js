const express=require("express")
const path=require("path")
const app=express()
const PORT=4444

app.get("/",(req,res)=>{
    res.send("Response from server built by express")
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"register.html"))
})

app.get("/register/get",(req,res)=>{
    // res.send("Post data recieved successfully!")
    console.log(req.query)
})

app.use(express.urlencoded({extended:true}))
app.post("/register/post",(req,res)=>{
    console.log(req.body)
})


app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`)
})


// console.log(__dirname)
// console.log(path.join("folder1","folder2","folder3"))
// console.log(path.join(__dirname,"contact.html"))