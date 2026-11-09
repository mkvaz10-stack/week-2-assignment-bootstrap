const artistInfo = document.getElementById("artistInfo");
const jsonSingers = `[
{"artistName": "Jose Alfredo Jimenez", "dob":"01/19/1926", "bestSongs":["Caminos de Guanajuato", "El Rey", "Si Nos Dejan", "El Jinete"]},
{"artistName": "Vicente Fernandez", "dob":"02/17/1940", "bestSongs":["Mujeres Divinas", "Hermoso Por Tu Maldito Amor", "Estos Celos", "Un Millon de Primaveras"]},
{"artistName": "Chavela Vargas", "dob":"04/17/1919", "bestSongs":["La Llorona", "No Volvere", "Que Te Vaya Bonito", "Paloma Negra"]},
{"artistName": "Juan Gabriel", "dob":"01/07/1950", "bestSongs":["Amor Eterno", "Querida", "Hasta Que Te Conoci", "El Noa Noa"]}
]`;
const singersObj = JSON.parse(jsonSingers);
let htmlRows = "";

for (let i = 0; i < singersObj.length; i++){
    const singer = singersObj[i];
    const songsString = singer.bestSongs.join(", ");

    htmlRows += `
        <tr>
            <td>${singer.artistName}</td>
            <td>${singer.dob}</td>
            <td>${songsString}</td>
        </tr>
    `;
}//end for (let i = 0; i < singersObj.length; i++)

artistInfo.innerHTML = htmlRows;

