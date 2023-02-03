# fampay-backend-assignment

> 2 APIs are integrated for this project which are mainly getAllProject API and searchInDatabase API.
### Tech Stack
* NodeJS
* MySQL
* Express

### Database Setup

```
CREATE DATABASE fampay;
USE fampay;
CREATE TABLE videos(
    id VARCHAR(255) NOT NULL,
    videoId VARCHAR(255) NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    thumbnail VARCHAR(255) NOT NULL,
    publishedAt DATETIME NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    isActive TINYINT(1) NOT NULL DEFAULT 1,
    PRIMARY KEY(id),
    KEY `fampay_videos_videoId` (`videoId`),
    KEY `fampay_videos_publishedAt` (`publishedAt`),
    KEY `fampay_videos_isActive` (`isActive`),
    FULLTEXT(title, description) # to search by jumbled keywords
);
```

### Installation
1) Clone the repo.
2) `npm install`
3)  Create .env file and set below varibles 
4) `SET ENVIRONMENT VARIABLES DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME`
5) `node app.js`

# Data Infusion
We have a function `storeDataInDatabase` in the file `/data-infuser.js` which hits the Youtube V3 Data API, and get all results, and store these results in the database.
This function is bound to run every 10 seconds, **and uses 3 API Keys**, which is scalable.

### Exposed End Points
### Get All Videos
File: `/routes/getAll.js`
URL: http://localhost:8888/getAll?page=2      (`page` param is optional)

### Search
File: `/routes/search.js`
URL: http://localhost:8888/search?q=major
http://localhost:3000/search?q=Bollywood%20old%20vs%20super%20song
