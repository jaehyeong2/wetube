import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetubedb");

const db = mongoose.connection;

const handleOpen = () => console.log("Connection to DB"); 
const handleError = (error) => console.log("Db error",error);
db.on("error", handleError);
db.once("open", handleOpen);


// { 
//     userNewUrlParser : true, 
//     useUnifiedTopology : true,
// });

