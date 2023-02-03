const { selectMultiple, insertQuery } = require("./db");
const uuid = require("uuid/v4");

// Response to request data from database
const getAllVideosFromDatabase = async (page) => {
  const LIMIT = 20;
  const offset = (page - 1) * 10;
  const query = `SELECT * FROM videos ORDER BY publishedAt DESC LIMIT ?, ?`;
  return await selectMultiple(query, offset, LIMIT);
};

// Inserting record receviced by YouTube API
const insertVideosToDatabase = async (videos) => {
  const getQuery = () => {
    let query = `INSERT INTO videos(id, videoId, title, description, thumbnail, publishedAt) VALUES `;
    videos.forEach((video) => {
      query += "(?, ?, ?, ?, ?, ?),";
    });
    // remove the traiiling comma
    query = query.slice(0, -1);
    return query;
  };
  const getArgs = () => {
    return videos
      .map((video) => {
        const { videoId, title, description, thumbnail, publishedAt } = video;
        const id = "VID" + uuid();
        return [id, videoId, title, description, thumbnail, publishedAt];
      })
      .flat(Infinity);
  };
  const query = getQuery();
  const args = getArgs();
  await insertQuery(query, ...args);
};

// get videos published by date
const getMaxPublishedAt = async () => {
  const query = `SELECT MAX(publishedAt) as maxPublishedAt FROM videos`;
  const results = await selectMultiple(query);
  if (results.length) {
    return results[0].maxPublishedAt;
  } else {
    const now = new Date();
    // current milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs
    const yesterday = now - 1000 * 60 * 60 * 24;
    return new Date(yesterday);
  }
};

//                                    BONUS POINT 3                                      //
// Optimise search api, so that it's able to search videos containing partial match for 
// the search query in either video title or description.
const searchVideosInDatabase = async (queryString) => {
  const query = `SELECT * FROM videos WHERE MATCH(title, description) AGAINST(? IN NATURAL LANGUAGE MODE)`;
  return selectMultiple(query, queryString);
};

module.exports = {
  getAllVideosFromDatabase,
  insertVideosToDatabase,
  getMaxPublishedAt,
  searchVideosInDatabase,
};
