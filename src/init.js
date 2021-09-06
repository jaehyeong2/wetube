import "./db";
import Video from "./models/Video";
import User from "./models/User";
import app from "./server";

const PORT = 4000;

app.listen(PORT,() => console.log("리스닝 중~"));