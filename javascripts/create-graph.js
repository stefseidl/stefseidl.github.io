/*
 * Parse data and create a graph with the data
 */
 
// Parse local CSV file
function parseData(createGraph){
	Papa.parse("../data/temphumdata3.csv", {
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
		temperature.push(data[i][3]);
		humidity.push(data[i][4]);
		}
	
	var chart = c3.generate({
		bindto: '#chart',
		data: {
			x: 'x',
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
                format: '%Y-%m-%d %H:%M:%S',
				}
			}
		},
		zoom: {
			enabled: true
			}
	});

}

parseData(createGraph);
