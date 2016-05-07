var axios = require('axios');
var secrets = require('../config/secrets');

var BASE_URL = "http://api.openweathermap.org/data/2.5";

var helpers = {
  getCurrentWeatherData: function (city) {
    var query = BASE_URL + "/weather?q=" + city + "&type=accurate&APPID=" + secrets.OPEN_WEATHER_API_KEY;
    return axios.get(query)
      .then(function (response) {
        return response.data;
      });
  },
  get5DayForecast: function (city) {
    var query = BASE_URL + "/forecast/daily?q=" + city + "&type=accurate&APPID=" + secrets.OPEN_WEATHER_API_KEY + "&cnt=5";
    return axios.get(query)
      .then(function (response) {
        return response.data;
      });
  }
};

module.exports = helpers;