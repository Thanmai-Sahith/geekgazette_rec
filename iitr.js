//including google charts
//Source: https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/piechart.html
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Club Type', '%of total'],
        ['Coding Related', 45],
        ['Other technical', 35],
        ['cultural', 20],
    ]);

    var options = {
        title: 'Club Stats',
        is3D: true,
        titleTextStyle: { color: '#bc8f8f' },
        backgroundColor: { fill: 'transparent' },
        legend: { textStyle: { color: 'grey' } },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}




