//const sayhi = (name) => {
    //console.log(`hello there ${name}`)
//}
//module.exports = sayhi;

//const pee = 'divya'
//const person = {
    //firstname:'divya'
//}


//module.exports = {pee,person};

//or

/*
module.exports.pee = 'divya'
const person = {
    firstname:'divya'
}


module.exports.personname = person;
*/


//

/*const http = require('http');
const server = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }
    else if(req.url === '/about'){
        res.end('this is our short history')
    }
    else{
        res.end(`<h1>Oops!</h1>
     <p> can't seem to find  the page you are looking for</p> 
     <a href='/'>back home</a>`
    );
    }
          

    

    

    
    

});

server.listen(2000,()=>{
    console.log('server is running on http://localhost:2000')
});
*/



 const _ = require('lodash');

 const items = [1, [2, [3, [4]]]]
 const newitems = _.flattenDeep(items)
 console.log(newitems)