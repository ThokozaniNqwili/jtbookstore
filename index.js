const http = require('http');
// 
const port = parseInt(process.env.port)
|| 4000;

// webserver
http.createServer((req,res)=>{
    const currUrl = req.url;
    console.log('Url: ', currUrl, '\nMethod: ', req.method);
    res.writeHead(200, {'Content-type': 'text/html'});
    switch(currUrl) {
        case '/':
            res.end('You are home');
        break
        case '/about':
            res.end('About me page');
        break
        case '/data':
            res.end('Page data');
        break
        default:
            res.end('Page / content was not found');
    }
}).listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

