google.charts.load('current', {packages: ['corechart']}); 
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
			 
  var query = new google.visualization.Query('https:/docs.google.com/spreadsheets/d/1Ke4HUPtbSNoThHYr_pbqfCdviSAO7shJoLHZboxB_t4/gviz/tq?rangeA%3AB');
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
	window.addEventListener("resize", drawChart);
	window.dispatchEvent(new Event('resize'));
  var data = response.getDataTable();	
  var DataTable = new google.visualization.DataTable()
  DataTable.addColumn ('date', 'A');
DataTable.addColumn('number', 'B');  

var chart = new google.visualization.LineChart(document.getElementById('kimschart'));
	var options = {
	
		height: '600',
		width: '100%',
		backgroundColor: {
			fill: 'LavenderBlush',
		},
		trendlines: {
    0: {
      type: 'polynomial',
        degree: 5,
		showR2: true,
      color: 'LightCoral',
      lineWidth: 2,
		pointSize: 1,
      opacity: 0.3,
      showR2: true,
      visibleInLegend: true
    }
  },
		
		chartArea: {
			backgroundColor: 'white',
			top: '30',
			left: '130',
			width: '85%',
			height: '85%',
		},
		curvetype: 'function',
		colors: ['Orchid'],
		pointSize: 5,
    pointShape: { type: 'star', sides: 5 },
		tooltip: {textStyle: {color: 'HotPink', fontName: 'Arial'}, showColorCode: false},
		hAxis: {
                  title: 'DATE',
                  textStyle: {
                     color: 'Coral',
                     fontSize: 16,
                     fontName: 'Arial',
                     bold: true,
                     italic: false,
					  format:'MMM d, y',
                  },
                  
                  titleTextStyle: {
                     color: 'HotPink',
                     fontSize: 25,
                     fontName: 'Arial',
                     bold: true,
                     italic: false
                  },
			textPosition: 'auto',
			gridlines: {
				color: 'PaleGreen'},
			minorGridlines:{color:'Cyan'},
			
               },
               
               vAxis: {
                  title: 'WEIGHT',
                  textStyle: {
                     color: 'Coral',
                     fontSize: 20,
                     bold: true
                  },
                  titleTextStyle: {
                     color: 'HotPink',
                     fontSize: 25,
                     bold: true,
					  italic: false,
                  },
			textPosition: 'auto',
				   gridlines: {
				color: 'PaleGreen',
			},
				   minorGridlines:{color:'Cyan'},
               }, 
		
		legend: 'none',
		explorer: {
        axis: 'horizontal',
        keepInBounds: true,
        maxZoomIn: 100.0
}
		
		
	}
   google.load('visualization', 'LineChart', {'packages':['corechart']});
  chart.draw(data, options);
}
