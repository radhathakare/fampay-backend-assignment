
> To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.
### Stack
* NodeJS
* MySQL


### Database Setup

1) CREATE DATABASE as fampay.
2) CREATE TABLE as videos.




### Installation
1) Clone the repo.- `git clone https://github.com/radhathakare/fampay-backend-assignment.git`.
2) `npm install`
3) Create .env file and set below varibles 
4) Create .env file and set variables DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASS, DATABASE_NAME.
5) `node app.js`

### Dockerization

Command: docker pull thakareradha0808/fampay-backend:latest

### Get All Videos
File: `/routes/getAll.js`
URL: http://localhost:3000/getAll

### Search Videos
File: `/routes/search.js`
URL: http://localhost:3000/search

### Search video for specific title
Example URL : http://localhost:3000/search?q=Bollywood%20old%20vs%20super%20song
