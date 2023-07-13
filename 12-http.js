const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to my home page');
    }
    if(res.url === '/about'){
        res.end('Here is our short history');
    }
    res.end(`<h1>OOPS!</H1>
    <p>We cant seem to find the page</p>
    <a href="/">back home</a>`)
    
})

server.listen(5000);