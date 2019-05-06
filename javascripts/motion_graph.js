/* Projekt HOME
 * Originator: Stefan Seidl
 * 
 * Parse data and create a graph with the data: detected motion
 */
 
// Parse local csv-file and create Graph
function parseData(createGraph){
	Papa.parse("../data/motion_sensor_data.csv", { // Parsing data
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
	var motion = ["motion"];
	
	// Save parsed data in Variables
	for (var i = 0; i < data.length-1; i++){
		time.push(data[i][0]);
		motion.push(data[i][1]);
		}
	console.log(motion);
	
	// Create graph with customized design
	var chart = c3.generate({
		bindto: '#chart_motion', // connect created graph to HTML section with id="chart_motion"
		data: {
			x: 'x',
			y: 'y',
			xFormat: '%Y-%m-%d %H:%M:%S', // 'xFormat' can be used as custom format of 'x'
			columns: [
				time,
				motion
			],
		type: 'scatter'
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
				max: 1,
				min: 0,
				tick: {
					count: 1,
					},
				padding: {top: 10, bottom: 0}
				}
		},
		zoom: {
			enabled: true
			},
		point: {
				r: 5
			},
		color: {
			pattern: ['#006400']
		}
	});

}

parseData(createGraph); // Parse CSV file and create Graph
