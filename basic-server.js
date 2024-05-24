import http from "http";


//creating a basic server
const server=http.createServer((req,res)=>{
    // res.end(
    //     "<b>Hello Tamil weekend  batch!,I am a <b> basic server</b> using http  an inbuilt NodeJS Package.I can also be used to creat apis. you have styarted learing Nodejs Api development </b>"
    // );
    res.end(JSON.stringify({message:"Hello World"}));
});

const port = 8010;

server.listen(port, () =>{
     console.log("Server listening  on",port);
});