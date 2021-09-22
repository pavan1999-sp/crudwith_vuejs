let express = require('express');
let mysql = require("mysql");
let cors= require("cors");
let bodyparser= require("body-parser");
let app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"userdata"
});
connection.connect();
// get requuest
app.get("/fetch",(req,res)=>{
    connection.query(`select * from udata`,(err,records)=>{
        if(err){
            console.log("errer")
        }
        else {
            res.send(records);
        }
    })
})
// post request 
app.post("/insert",(req,res)=>{
    connection.query(`insert into udata values(${req.body.u_id},'${req.body.u_name}',${req.body.u_sal})`,
    (err,result)=>{

if(err) throw err;
else{
    res.send({insert:"success"});
}

    });
});

//  put request
app.post("/update",(req,res)=>{
    connection.query(`update udata set u_name='${req.body.u_name}',u_sal=${req.body.u_sal} where u_id=${req.body.u_id}`,
    (err,result)=>{
    if(err) throw err;
    else{
    res.send({update:"success"});
    }
    });
   });
   //delete request
   app.delete("/delete",(req,res)=>{
    console.log(req)
        console.log("delete")
    connection.query(`delete from udata where u_id=${req.body.u_id}`,(err,result)=>{
        console.log("delete")
        console.log(req.body)
    if(err) throw err;
    else{
    res.send({delete:"success"});
    }
    });
   });
   //assign the port no
   app.listen(7070);
   console.log("server listening the port no.7070");
   
