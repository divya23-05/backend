
const os = require('os');
//info about current user;
const user = os.userInfo();
//console.log(user);

//method returns the system uptime in seconds

console.log(`The system  uptime is ${os.uptime() }seconds`);


const currenrOS = {
    name : os.type(),
    release : os.release(),
    totalmemory:os.totalmem(),
    freememory: os.freemem()

}
console.log(currenrOS);