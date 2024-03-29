
import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine","pug");
app.set("views",process.cwd()+"/src/views");
app.use(express.urlencoded({extended:true}));
app.use("/",rootRouter);
app.use("/user",userRouter);
app.use("/videos",videoRouter);

export default app;



