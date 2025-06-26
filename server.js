import http from 'http';
import { json } from 'stream/consumers';
const port = 8000;
const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html');
   // res.write('hello world');
  
    //res.writeHead(500,{ 'Content-Type': 'application/json'})
     res.statusCode = 404;

     // res.end('<h1>Hello World</h1>');
      // res.end(JSON.stringify({message:'Server Error'}));
});

server.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

