const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https")






const app=express();

app.use("/public",express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    const firstName =req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;
const data={
    members:[{
        email_adress:email,
        status:"subscribed",
        merge_fields:{
            FNAME:firstName,
            LNAME:lastName
        }
    }]


    }    ;


const jsonData = JSON.stringify(data);

const url="https://us21.api.mailchimp.com/3.0/lists/4d50a5c937";

const option={
    method:"POST",
    auth:"salim1:495953d075f51ed766bcfeb3b3f8dadb-us21"
}


const request=https.request(url,option,function(response){
   if (response.statusCode === 200){
    res.sendFile(__dirname +"/sucess.html");
   }
   else{
    res.sendFile(__dirname + "/failure.html");
   }

response.on("data",function(response){
    console.log(JSON.parse(data));
});
});






    



request.write(jsonData);
request.end();

});

app.listen(process.env.PORT  || 4000,function(){
    console.log("server is running on port 4000");
});








