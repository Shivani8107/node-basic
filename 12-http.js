const http = require('http')

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end(`<h1> Welcome To Home Page </h1>`)
        return
    }
    if (req.url === '/about'){
        res.end(`<h1> This is our about page </h1>`)
        return
    }else{
        res.end(`<h1> Oops!</h1>
        <p> We cant find your page </p>
        <a href="/">Home</a>`)
        return
    }
    
})

server.listen(5000)