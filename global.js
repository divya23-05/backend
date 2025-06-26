//GLOBALS - NO WINDOW !!!! 
//__dirname - path to current directory 
// __filename - file name
// require - function to use the modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//console.log(__dirname);

//Modules 



/*const  {john,peter} = require('./names');
const sayhi = require('./app');

sayhi('divya');
sayhi(john);
sayhi(peter);
*/

const data = require('./app');

console.log(data);
require('./mind-grenade');

