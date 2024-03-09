const express = require("express");
const membersRouter = require("./src/members/routes");
const postsRouter = require("./src/posts/routes");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// members routes
app.use("/members", membersRouter);
// posts routes
app.use("/posts", postsRouter);

// app listening
app.listen(port, () => {
  console.log(`first express app listening on port ${port}!`);
});
