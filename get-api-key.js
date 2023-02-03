
let youtubeApiKeysIndex = 0;

var apiHitCounter = 0;

const API_KEYS = [
  "AIzaSyBtuPSx6c4YaHuIyBaRTH372QtpSRfCLoU",
  "AIzaSyBuOdq0zc6ZO2lejz4tuK5FUUqG9KSLb_U",
  "AIzaSyDjDWVLTzqBiBetVtGFOJwB7mSnbyJ4dUo",
];


module.exports = () => {
  var pacificTimeReset = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  var pacificTime = new Date(pacificTimeReset);
  if (pacificTime.getHours === 0 && pacificTime.getMinutes === 0) {
    apiHitCounter = 0;
  } else {
    apiHitCounter++;
  }
  youtubeApiKeysIndex = Math.floor(apiHitCounter / 100);
  return API_KEYS[youtubeApiKeysIndex];
};
