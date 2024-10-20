import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById('average-seasons');
renderSeriesInTable(series);
avgSeasonsElm.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                               <td>").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var numberSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
        numberSeries = numberSeries + 1;
    });
    return totalSeasons / numberSeries;
}
