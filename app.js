const express = require("express");
const dataInfuser = require("./data");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

dataInfuser();
setInterval(dataInfuser, 10 * 1000);


// A GET API which returns the stored video data in a paginated response sorted in descending order 
// of published datetime.
app.get("/getAll", require("./routes/getAll"));


// A basic search API to search the stored videos using their title and description.
app.get("/search", require("./routes/search"));

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
