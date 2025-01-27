import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import userRoutes from "./routers/users.js";

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send({ Message: "Hello World" });
});
console.log("mdb=>", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("===========Database Connected===========");
  })
  .catch(() => {
    console.log("===========Database Connection Failed===========");
  });

app.listen(process.env.PORT, () => {
  console.log("server is running ");
});
