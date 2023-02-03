
> To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.
### Stack
* NodeJS
* MySQL


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
1) Clone the repo.- `git clone https://github.com/radhathakare/fampay-backend-assignment.git`.
2) `npm install`
3) Create .env file and set below varibles 
4) Create .env file and set variables DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASS, DATABASE_NAME.
5) `node app.js`


### Get All Videos
File: `/routes/getAll.js`
URL: http://localhost:3000/getAll

### Search Videos
File: `/routes/search.js`
URL: http://localhost:3000/search

### Search video for specific title
Example URL : http://localhost:3000/search?q=Bollywood%20old%20vs%20super%20song
