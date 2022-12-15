import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;

app.use("/api", routes);

//add one endpoint

app.get("/hello", (req, res) => {
  res.send(" Hello World");
});

app.listen(port, () => {
  console.log(`Listening on port  ${port}`);
});
