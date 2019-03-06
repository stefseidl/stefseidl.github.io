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
	
}

parseData(createGraph);
