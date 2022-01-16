const mongoose = require("mongoose");

//create publications schema
const UserSchema = mongoose.Schema({
    username:String,
    email: String,
    password: String,
    
});

const UsersModel = mongoose.model("Users", UserSchema);

module.exports =UsersModel;