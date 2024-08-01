const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
    // console.log(request)
    const { url, method } = request
    // console.log(method)
    // response.writeHead(200,{"Context-Type":"plain/text"})
    // response.write("Response from server!")
    // response.end()

    if (url == "/") {
        fs.readFile("./home.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                response.writeHead(200, { "Context-Type": "plain/html" })
                response.write(data)
                response.end()
            }
        })
    }
    else if (url == "/contact") {
        fs.readFile("./contact.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                response.writeHead(200, { "Context-Type": "plain/html" })
                response.write(data)
                response.end()
            }
        })
    }

    else if (url == "/register" && method=="GET") {
        fs.readFile("./register.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                response.writeHead(200, { "Context-Type": "plain/html" })
                response.write(data)
                response.end()
            }
        })
    }

    else if (url == "/register" && method == "POST") {
        response.writeHead(200, { "Context-Type": "plain/html" })
        response.write("Post data recieved successfully!")
        response.end()
    }
})


server.listen(4000, () => {
    console.log("server starting at port no 4000")
})