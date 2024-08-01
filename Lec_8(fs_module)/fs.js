const fs=require("fs")

// console.log("Hi")
// const data=fs.readFileSync("./book.txt",{encoding:"utf-8"})
// console.log(data)
// console.log("Hello")

console.log("Hi")
fs.readFile("./book.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log("hello")

let game="GTA SanAndreas"
fs.writeFile("./game.txt",game,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File created successfully!")
    }
})