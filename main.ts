import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;

renderSeriesInTable(series);
avgSeasonsElm.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series :Serie[]): void{
    series.forEach(serie =>{
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons (series: Serie[]): number{
    let totalSeasons: number = 0;
    let numberSeries: number = 0;
    series.forEach(serie=>{totalSeasons = totalSeasons + serie.seasons;
                       numberSeries = numberSeries + 1;
    });
    return totalSeasons/numberSeries;
}