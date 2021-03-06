'use strict';

(function() {
	var GLB = window.GLB = window.GLB || {}


	var OBSERVER_PROTOTYPE = {
		update: function(temperature, humidity, pressure ) {
			this.temperature = temperature
			this.humidity = humidity
			this.pressure = pressure
			this.display()
		},

		display: function() {
			console.log("\n")
			console.log("name: " + this.name)
			console.log("temperature is: " + this.temperature)
			console.log("humidity is: " + this.humidity)
			console.log("pressure is: " + this.pressure)
		}

	}

	GLB.Observer = {
		create: function( name, weatherData ) {
			var observer = Object.create(OBSERVER_PROTOTYPE)

			observer.name = name
			observer.temperature = null
			observer.humidity = null
			observer.pressure = null
			observer.weatherData = weatherData
			observer.weatherData.registerObserver( observer )

			return observer
		}

	}

})()