import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
  res.send({ Message: "Hello world" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is Live");
});
