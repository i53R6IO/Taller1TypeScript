import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById('average-seasons');
var seriesName = document.getElementById('seriesName');
var seriesImg = document.getElementById('serieImage');
var seriesDescription = document.getElementById('seriesDescription');
var seriesLink = document.getElementById('seriesLink');
renderSeriesInTable(series);
avgSeasonsElm.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                               <td><a href=\"#\">").concat(serie.name, "</a></td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
seriesTbody.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;
    if (target && target.tagName === 'A') {
        var text = target.textContent || target.innerText;
        ;
        showSeriesinCard(text);
    }
});
function showSeriesinCard(text) {
    var serieFound = searchSeriesByName(text, series);
    if (serieFound) {
        seriesName.textContent = "".concat(serieFound.name);
        seriesImg.innerHTML = "<img src = ".concat(serieFound.photo);
        seriesDescription.textContent = "".concat(serieFound.description);
        seriesLink.innerHTML = "<a href = ".concat(serieFound.url, ">").concat(serieFound.url, "</a>");
    }
    else {
        seriesName.textContent = 'Serie no encontrada';
    }
}
function searchSeriesByName(nameKey, series) {
    for (var i = 0; i < series.length; i++) {
        if (series[i].name === nameKey) {
            return series[i];
        }
    }
    return undefined;
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
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
