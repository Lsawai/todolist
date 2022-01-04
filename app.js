const express = require("express");
const bodyParser = require("body-parser");
const app= express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
let items=["Wake up",];
app.get("/",function(req,res){

    let today= new Date();
    currentDay= today.getDay();
    let options={weekday: 'long', day: 'numeric', month: 'long'};
    let day= today.toLocaleDateString("en-US",options);
    res.render("list",{Day: day, newListitems: items});
});
app.post("/",function(req,res){
    let item= req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})