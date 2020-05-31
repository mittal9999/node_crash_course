// const  Person = require('./person');
// import Person from './person';
// const person1 = new Person('john doe', 30);
// person1.greeting();

//const Logger = require('./logger');
//export {Logger} from "./logger";
// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener' ,data));

// logger.log('Hello World');
// logger.log('Hyy');
// logger.log('Hiiii');

const http =  require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
//Console.log(req, url);
if(req.url == '/') {
   res.end('<h1>Home</h1>'); 
}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT,  () => console.log(`server running on post ${PORT}`));