const { nextISSTimesForMyLocation } = require('./iss_promised');

/*fetchMyIP()
  //.then(flyOverTimes)
  .then(coordsByIP)
  .then(function (body) {
      console.log(body)
  });*/

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  }) .catch((error) => {
    console.log("It didn't work: ", error.message);
  });