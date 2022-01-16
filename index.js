// MAIN BACKEND FILE

// const db = require("./databases");
// console.log(db.books);
// console.log(db.authors);
// console.log(db.publications);

const MovieModel=require("./Database/movies");
const UserModel=require("./Database/users");
require('dotenv').config();
var cors=require("cors");

const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
var mongoDB=process.env.MONGODB_URI;
//Import the mongoose module
var mongoose = require('mongoose');
const { response } = require("express");
//Set up default mongoose connection
var mongoDB = "mongodb+srv://shirish_35:shirish35@cluster0.bs1p3.mongodb.net/book-my-show?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));
// http://localhost:3000/
app.get("/", (req, res) => {
    return res.json({"WELCOME": `to my Backend Software for the BookMyShow`});
});

// http://localhost:5000/movies
app.get("/movies", async(req, res) => {
    const getAllMovies = await MovieModel.find();
    return res.json(getAllMovies);
});

// http://localhost:5000/movies/:id
app.get("/movie/:id", async(req, res) => {
    const {id} = req.params;
    const getAllMovies = await MovieModel.findOne({_id:id});
    return res.json(getAllMovies);
});

// http://localhost:5000/user-register
app.post("/user-register", async(req, res) => {
    const addNewUser=await UserModel.create(req.body);
    return res.json({UserAdded: addNewUser, message:"user was added!!"});
});

app.listen(process.env.PORT || 5000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
});

