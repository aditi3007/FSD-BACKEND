const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/home') {
        res.end('Welcome to Home Page');
    } else if (req.url === '/about') {
        res.end('Page not found');
    } else {
        res.end('Invalid Route');
    }
});
server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Server is running on port 9000");
})
