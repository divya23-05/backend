//const {readFileSync,writeFileSync} = require('fs');
//const first = readFileSync('./content/subfolder/first.txt','utf8');
//const second = readFileSync('./content/subfolder/second.txt','utf8');


//writeFileSync('./content/subfolder/result.txt',`this is ${first} ${second}`,
   // {flag : 'a'}
//);

const {readFile,writeFile} = require('fs');
console.log("start");
readFile('./content/subfolder/first.txt','utf8',(err,result)=>{

    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/subfolder/result1.txt',
            `this is ${first} and ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                }
                console.log("1st task");
            }
        )
    })
})

console.log("new task");