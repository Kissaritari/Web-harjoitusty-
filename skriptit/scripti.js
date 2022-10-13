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
    document.getElementById('')
}
function changeText() {
    const json = ('../media/statsit.json');
    const dict = JSON.parse(json);
    let name = dict.armorit.armor;
}

