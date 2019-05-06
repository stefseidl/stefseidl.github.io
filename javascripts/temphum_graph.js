/* Projekt HOME
 * Originator: Stefan Seidl
 * 
 * Parse data and create a graph with the data: temperature and humidity
 */
 
// Parse local csv-file and create Graph
function parseData(createGraph){
	Papa.parse("../data/temphum_data.csv", { // Parsing data
		download: true,
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data); // Run function createGraph() with the data parsed with Papa.parse
	}
});
}

function createGraph(data){
	
	// Variables
	var time = ['x'];
	var temperature = ["temperature"];
	var humidity = ["humidity"];
	
	// Save parsed data in Variables
	for (var i = 0; i < data.length-1; i++){
		time.push(data[i][0]);
		temperature.push(data[i][1]);
		humidity.push(data[i][2]);
		}
	
	// Create graph with customized design
	var chart = c3.generate({
		bindto: '#chart_temphum', // connect created graph to HTML section with id="chart_temphum"
		data: {
			x: 'x',
			y: 'y',
			xFormat: '%Y-%m-%d %H:%M:%S', // 'xFormat' can be used as custom format of 'x'
			columns: [
				time,
				temperature,
				humidity
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
				count: 8,
                format: '%Y-%m-%d %H:%M:%S',
				}	
			},
			y: {
				max: 100,
				min: 0,
				padding: {top: 0, bottom:0}
				}
		},
		zoom: {
			enabled: true
			},
		point: {
				r: 3
			},
		color: {
			pattern: ['#FF4500','#4169E1']
		}
	});

}

parseData(createGraph); // Parse CSV file and create Graph
