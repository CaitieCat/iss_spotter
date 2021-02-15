const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
  };

const coordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request('https://freegeoip.app/json/' + ip);
};

const flyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).ip;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
  };

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(coordsByIP)
    .then(flyOverTimes)
    .then((ip) => {
    const { response } = JSON.parse(ip);
    return response;
    });
  };
  
  module.exports = { nextISSTimesForMyLocation };