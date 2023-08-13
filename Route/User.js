const express = require("express");
const ejs = require("ejs");
const User = express();

//Database File Module
const User_Data = require("../Models/Login");



User.set("view engine", "ejs");
User.use(express.json());
User.use(express.urlencoded({ extended: false }));

User.get("/Welcome",(req,res)=>{
  res.render("./User/Welcome.ejs");
});

module.exports = User;