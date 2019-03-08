/*
 * Parse data and create a graph with the data
 */
 
// Parse local CSV file
function parseData(createGraph){
	Papa.parse("../data/temphum_data.csv", {
		download: true,
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data);
	}
});
}

function createGraph(data){
	
	var time = ['x'];
	var temperature = ["temperature"];
	var humidity = ["humidity"];
	
	for (var i = 0; i < data.length-1; i++){
		time.push(data[i][0]);
		temperature.push(data[i][1]);
		humidity.push(data[i][2]);
		}
	
	var chart = c3.generate({
		bindto: '#chart_temphum',
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

parseData(createGraph);
