import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;
const seriesName: HTMLElement = document.getElementById('seriesName')!;
const seriesImg: HTMLElement = document.getElementById('serieImage')!;
const seriesDescription: HTMLElement = document.getElementById('seriesDescription')!;
const seriesLink: HTMLElement = document.getElementById('seriesLink')!;


renderSeriesInTable(series);
avgSeasonsElm.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series :Serie[]): void{
    series.forEach(serie =>{
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td><a href="#">${serie.name}</a></td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

seriesTbody.addEventListener('click', (event) => {
event.preventDefault();
const target = event.target as HTMLAnchorElement;
if (target && target.tagName === 'A') {
  const text = target.textContent || target.innerText;;
  showSeriesinCard(text)
}
});

function showSeriesinCard (text: string){
  let serieFound: Serie | undefined  = searchSeriesByName(text, series);
  
  if (serieFound) {
    seriesName.textContent = `${serieFound.name}`;
    seriesImg.innerHTML = `<img src = ${serieFound.photo}`;
    seriesDescription.textContent = `${serieFound.description}`;
    seriesLink.innerHTML = `<a href = ${serieFound.url}>${serieFound.url}</a>`
  } else {
    seriesName.textContent = 'Serie no encontrada';
  }
}

function searchSeriesByName(nameKey: string, series: Serie[]) : Serie | undefined{
  for (var i = 0; i < series.length; i++) {
    if (series[i].name === nameKey) {
      return series[i];
    }
  }
  return undefined;
}

function getAverageSeasons (series: Serie[]): number{
    let totalSeasons: number = 0;
    let numberSeries: number = 0;
    series.forEach(serie=>{totalSeasons = totalSeasons + serie.seasons;
                       numberSeries = numberSeries + 1;
    });
    return totalSeasons/numberSeries;
}

function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
      if (seriesTbody.firstChild != null) {
        seriesTbody.removeChild(seriesTbody.firstChild);
       
      }
    }
}