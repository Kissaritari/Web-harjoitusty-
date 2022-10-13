"use strict";

function date() {
    let date = new Date();
    let paiva = date.getDate();
    let kk = date.getMonth();
    let vuosi = date.getFullYear();
    let pvm = ("Tänään on " + paiva + "." + kk + "." + vuosi);
    document.getElementById('pvm').innerHTML = pvm;
}

function changePic(source) {
    document.getElementById('valittu').src=source;
}
function changeText() {
   const statsit = fetch('../media/statsit.json')
    console.log(statsit)

   /*
   let nimi = statsit.armorit.armor;
   let dr = statsit.defenseRating;
   let dt = statsit.defenseThreshold;
   document.getElementById('statsit').innerHTML = nimi + "Defense Rating: " + dr + "Defense threshold: " + dt; */
}
