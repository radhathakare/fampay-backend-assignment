const { searchVideosInDatabase } = require("../databonus");

const sanitizeQueryString = (queryString) => {
  if (typeof queryString === "string") {
    return queryString
      .split(/[^A-z 0-9]/)
      .join("")
      .replace(/ +(?= )/g, "");
  }
  return "";
};

const requestHandler = async (req, res) => {
  const queryString = sanitizeQueryString(req.query.q);
  const videos = await searchVideosInDatabase(queryString);
  res.send(videos);
};

module.exports = requestHandler;
