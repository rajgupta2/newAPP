const express = require("express");
const ejs = require("ejs");
const Home = express();

//Database File Module
const User_Data = require("../Models/Login");


Home.set("view engine", "ejs");
Home.use(express.json());
Home.use(express.urlencoded({ extended: false }));

const UserRoute = require("./User.js");
Home.use("/User", UserRoute);

//Index
Home.get("/", (req, res) => {
    res.render("./Home/Sign-in.ejs");
});



Home.get("/Sign-up", (req, res) => {
    res.render("./Home/Sign-up.ejs");
});

Home.post("/Sign-up", (req, res) => {
   const data=new User_Data({
    Email:req.body.Email,
    Password:req.body.Password
   });
  data.save().then(()=>{
    res.render("./Home/Sign-in.ejs",{msg:"you have registered successfully Please login to continue "});
   }).catch((err) => {
    res.render("./Home/Sign-up.ejs",{msg:"We are unable to registerd you "+err.message});   
   });
});

Home.post("/Sign-in", (req, res) => {
    const data={
     Email:req.body.Email,
     Password:req.body.Password
    };
    User_Data.findOne(data).then((user) => {
        console.log("calles");
        if(user)
         res.redirect("/User/Welcome");
        else
         res.render("./Home/Sign-in.ejs",{msg:"Wrong credentials"});
    });
});

Home.listen(3000,()=>{
    console.log("server is running");
})