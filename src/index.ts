import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Welcome");
});

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
