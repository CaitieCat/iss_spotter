const { fetchMyIP, coordsByIP } = require('./iss');
//const {flyOverTimes} = require('./iss');

fetchMyIP((error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , data);
});


coordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

flyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Flyover times are:' , passTimes);
});