import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine","pug");
app.set("views",process.cwd()+"/src/views");
app.use("/",globalRouter);
app.use("/user",userRouter);
app.use("/videos",videoRouter);


app.get("/", () => console.log("trying to go home"));

app.listen(4000,() => console.log("리스닝 중~"));

