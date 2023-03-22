const expRun = require("express");
const bodyParser = require("body-parser");
const myApp = expRun();
myApp.use(bodyParser.urlencoded({ extended: true }));
myApp.get('/',(req,res)=>{
    let inlineHTML =`<!doctype html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <form method="POST" action="/user">
            <input type="id" name="id">
            <input type="password" name="password">
            <input type="submit">
        </form>
    </body>
</html>`;
    res.send(inlineHTML);
}).post('/user',(req,res)=>{
    let inputID = req.body.id;
    let inputPW = req.body.password;
    res.send(`<p>ID : ${inputID}</p><p>Password : ${inputPW}</p>`);
}).listen('4261',()=>{
    console.log("4261 Open");
});