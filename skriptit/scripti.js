"use strict";

function date() {
    let date = new Date();
    let paiva = date.getDate();
    let kk = date.getMonth();
    let vuosi = date.getFullYear();
    let pvm = ("Tänään on " + paiva + "." + kk + "." + vuosi);
    document.getElementById('pvm').innerHTML = pvm;
}
