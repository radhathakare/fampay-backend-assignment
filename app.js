const express = require("express");
const dataInfuser = require("./data");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome");
});


//                                BASIC REQUIREMENTS POINT 1                                    //
// Server should call the YouTube API continuously in background with some interval for fetching 
// the latest videos for a predefined search query and should store the data of videos 
// in a database with proper indexes.
dataInfuser();
// call every 10 seconds
setInterval(dataInfuser, 10 * 1000);

//                                BASIC REQUIREMENTS POINT 2                                    //
// A GET API which returns the stored video data in a paginated response sorted in descending order 
// of published datetime.
app.get("/getAll", require("./routes/getAll"));

//                                BASIC REQUIREMENTS POINT 3                                    //
// A basic search API to search the stored videos using their title and description.
app.get("/search", require("./routes/search"));

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
