const express = require("express")
const path = require("path")
const app = express()
const PORT = 4444
const fs = require("fs")

// let mockData = [
//     { id: 1, name: "aman", class: "3rd_yr" },
//     { id: 2, name: "hemant", class: "3rd_yr" },
//     { id: 3, name: "yash", class: "3rd_yr" },
//     { id: 4, name: "shradha", class: "3rd_yr" },
//     { id: 5, name: "kartik", class: "3rd_yr" },
//     { id: 6, name: "sudhakar", class: "3rd_yr" },
//     { id: 7, name: "aryan", class: "3rd_yr" },

// ]

// app.get("/",(req,res)=>{
//     res.send("Response from server built by express")
// })

// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(__dirname,"contact.html"))
// })

// app.get("/register",(req,res)=>{
//     res.sendFile(path.join(__dirname,"register.html"))
// })

// app.get("/register/get",(req,res)=>{
//     // res.send("Post data recieved successfully!")
//     console.log(req.query)
// })

// app.get("/api/:user/:id/:class",(req,res)=>{
//     console.log(req.params)
// })

// app.get("/api/student",(req,res)=>{
//     console.log(req.query)
// })

// app.use(express.urlencoded({extended:true}))
// app.post("/register/post",(req,res)=>{
//     console.log(req.body)
// })

app.get("/getuser", (req, res) => {
    res.send(mockData)
})

app.use(express.urlencoded({ extended: true }))

app.post("/adduser", (req, res) => {
    console.log(req.body)
    fs.readFile("./database.json", { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            let addedData = JSON.parse(data)
            addedData.push(req.body)
            let stringifyData = JSON.stringify(addedData)
            // Know i have to write file
            fs.writeFile("./database.json", stringifyData, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.send("Data added successfully!")
                }
            })
        }
    })
})

// We are filtering the data using array's filter method and data is coming
// our server in req.params object 
app.get("/getuser/:name", (req, res) => {
    const { name } = req.params
    let data = mockData
    let temp = data.filter((element) => element.name.toLowerCase() == name.toLowerCase())
    if (temp.length > 0) {
        res.send(temp)
    }
    else {
        res.send("User not found!")
    }
})

app.delete("/delete/:id", (req, res) => {
    let { id } = req.params
    fs.readFile("./database.json", { encoding: "utf-8" }, (err, mockData) => {
        if (err) {
            console.log(err)
        }
        else {
            let data = JSON.parse(mockData)
            let indexOf = data.findIndex((element) => element.id == id)

            if (indexOf >= 0) {
                let filteredData = data.filter((element) => element.id != id)
                let stringifiedData = JSON.stringify(filteredData)

                fs.writeFile("./database.json", stringifiedData, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.send("Your deleted successfully!")
                    }
                })
            }

            else {
                res.send("Element Not found!")
            }


        }
    })

})



app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}`)
})


// console.log(__dirname)
// console.log(path.join("folder1","folder2","folder3"))
// console.log(path.join(__dirname,"contact.html"))