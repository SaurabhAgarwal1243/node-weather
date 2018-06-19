const request = require('request');
const argv = require('yargs').argv;

const apiKey = 'e4940fbe2067834baa94758b27a18b41';
const city = argv.c || 'portland';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err,response,body) {
	if(err){
		console.log('error:', error);
	}else {
		const weather = JSON.parse(body)
		const message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});

