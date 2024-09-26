import express, { json } from "express";
import connectToMongoDb from "./src/connectToMongoDb/connectToMongoDb.js";
import errorMiddlewire from "./src/middlewire/errorMiddlewire.js";
import blogRouter from "./src/routes/blogRouter.js";
import cors from "cors";

let expressApp = express();
expressApp.use(cors());// we can use this to hit API from browser and always place cors at top
//                             //and it give its api to those who buy its apl
expressApp.use(json());

expressApp.listen(8000, () => {
  console.log("server is running on port 8000");
  connectToMongoDb();
});

expressApp.use("/blog", blogRouter);

expressApp.use(errorMiddlewire);


