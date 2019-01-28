import "dotenv/config";
import uuidv4 from "uuid/v4";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import models from "./models";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.get("/", (req, res) => {
  return res.send("Received a get method");
});

app.post("/", (req, res) => {
  return res.send("Received a post method");
});

app.put("/", (req, res) => {
  return res.send("Received a put method");
});

app.delete("/", (req, res) => {
  return res.send("Received a delete method");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app lisenting on port ${process.env.PORT}`);
});
