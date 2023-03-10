const { selectMultiple, insertQuery } = require("./db");
const uuid = require("uuid/v4");


const getAllVideosFromDatabase = async (page) => {
  const LIMIT = 20;
  const offset = (page - 1) * 10;
  const query = `SELECT * FROM videos ORDER BY publishedAt DESC LIMIT ?, ?`;
  return await selectMultiple(query, offset, LIMIT);
};


const insertVideosToDatabase = async (videos) => {
  const getQuery = () => {
    let query = `INSERT INTO videos(id, videoId, title, description, thumbnail, publishedAt) VALUES `;
    videos.forEach((video) => {
      query += "(?, ?, ?, ?, ?, ?),";
    });
    
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


const getMaxPublishedAt = async () => {
  const query = `SELECT MAX(publishedAt) as maxPublishedAt FROM videos`;
  const results = await selectMultiple(query);
  if (results.length) {
    return results[0].maxPublishedAt;
  } else {
    const now = new Date();
  
    const yesterday = now - 1000 * 60 * 60 * 24;
    return new Date(yesterday);
  }
};


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
