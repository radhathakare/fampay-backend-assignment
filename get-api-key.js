// Varrible maintained for iterating over the API_KEYS list.
let youtubeApiKeysIndex = 0;

// Maintain a counter of hits used for switching the API keys.
var apiHitCounter = 0;

// Adding multiple APIs keys from different project will increae the quota of the access to the APIs.
const API_KEYS = [
  "AIzaSyBtuPSx6c4YaHuIyBaRTH372QtpSRfCLoU",
  "AIzaSyBuOdq0zc6ZO2lejz4tuK5FUUqG9KSLb_U",
  "AIzaSyDjDWVLTzqBiBetVtGFOJwB7mSnbyJ4dUo",
];

//                                BONUS POINT 1                                    //
// Add support for supplying multiple API keys so that if quota is exhausted on one,
// it automatically uses the next available key.

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
