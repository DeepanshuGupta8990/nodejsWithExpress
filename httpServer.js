const http = require("http");
const fs = require("fs");

const index = fs.readFileSync('index.html','utf-8')
const data = fs.readFileSync('dummy.json','utf-8')

const server = http.createServer((req,res)=>{

    console.log(req.url)
    res.setHeader('Content-type','text/html')
    // res.end('<h1>Hello</h1>')
    // res.end(JSON.stringify({age:23}))
    res.end(index)

}) 

server.listen(3000,()=>{
    console.log("The server is running")
})