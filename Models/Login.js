const mongoose =require("mongoose");
const connectionurl="mongodb://127.0.0.1:27017/newApp";
mongoose.connect(connectionurl).then(() =>{
    console.log("connected to db successfully");
}).catch((err)=>{
    console.log("failes to connect with db "+err);
});

const UserSchema = new mongoose.Schema({ 
    Email: String,
    Password: String
});


//Creating Collection
const User_Data= mongoose.model("User_Data",UserSchema);
module.exports=User_Data;