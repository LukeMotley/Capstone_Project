d3.json("Combined_GME_Data.json").then((data) => {
var xticks = data.polarity;
var yticks = data.Percent_Change;
var chartData = [{
    x: xticks,
		y: yticks,
    }];
    Plotly.newPlot("myDiv", chartData);
});
