
const express=require("express");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("result" + result);
})
app.get("/bmical",function(req,res) {
    res.sendFile(__dirname + "/bmical.html");
    
});
app.post("/bmical",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi=weight/(height*height);
    res.send("BMI is" + bmi);
})

app.listen(3000,function () {
    console.log("server is running on port 3000");
});