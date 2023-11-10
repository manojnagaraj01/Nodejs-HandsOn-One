//import http module
const http = require('http')
const jsonData = require('./jsonPackage')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("<h1>this is my HTTP home server</h1>")
        res.end()
    }else if(req.url === '/jsondata'){
        const jsonStore = JSON.stringify(jsonData)
        // res.write(jsonData)
        res.write(jsonStore)
        res.end()
    }else if(req.url === '/student'){
        res.write("<h1>this is my HTTP student page</h1>")
        res.end()
    }else{
        res.write("<h2>404 Error</h2>")
        res.end()
    }
})

server.listen(5050, ()=>{
    console.log("server loaded...");
})