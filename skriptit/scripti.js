"use strict";
function date() {
    let date = new Date();
    let paiva = date.getDate();
    let kk = date.getMonth() + 1;
    let vuosi = date.getFullYear();
    let pvm = ( "Tänään on " + paiva + "." + kk + "." + vuosi );
    document.getElementById( 'pvm' ).innerHTML = pvm;
}
function changePic(source,armorid) {
    document.getElementById( 'valittu' ).src=source;
    changeText(armorid);
    localStorage.setItem( 'current-picture',source );
}
 /*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/

    /*
    let json = fetch('https://kissaritari.github.io/kissa/media/statsit.json');
    console.log(json)
    const dict = JSON.parse(json);
    if (data[0]['armorid'] == armorid) {
        let name = statsit['armorit'][armorid]["armor"];
        let dr = statsit['armorit'][armorid]["damageResistance"];
        let dt = statsit['armorit'][armorid]["damageThreshold"];
        document.getElementById('statsit').innerHTML = name + "Damage resistance: " + dr + " Damage threshold" + dt ;
        */
function changeText(armorid) {
    /* en saanu millää tuota jsonia toimimaan ulkoisesta tiedostosta : () */
    let statsit = {"armorit":[
        {"armorid":"0","armor":"Brotherhood Armor","damageResistance":"40","damageThreshold":"8","id":"brotherhood-armor-teksti" },
        {"armorid":"1","armor":"Combat Armor mk2","damageResistance":"40","damageThreshold":"6","id":"combat-armor-mk2-teksti"},
        {"armorid":"2","armor":"combat Armor","damageResistance":"40","damageThreshold":"5","id":"combat-armor-teksti"},
        {"armorid":"3","armor":"leather Armor Mk2","damageResistance":"25","damageThreshold":"3","id":"leather-armor-mk2-teksti"},
        {"armorid":"4","armor":"leather Armor","damageResistance":"20","damageThreshold":"2","id":"leather-armor-teksti"},
        {"armorid":"5","armor":"leather Jacket Mk2","damageResistance":"30","damageThreshold":"2","id":"leather-jacket-mk2-teksti"},
        {"armorid":"6","armor":"metal Armor","damageResistance":"30","damageThreshold":"4","id":"metal-armor-teksti"},
        {"armorid":"7","armor":"metal Armor Mk2","damageResistance":"35","damageThreshold":"4","id":"metal-armor-mk2-teksti"},
        {"armorid":"8","armor":"tesla Armor","damageResistance":"20","damageThreshold":"4","id":"tesla-armor-teksti"},
        {"armorid":"9","armor":"power Armor","damageResistance":"40","damageThreshold":"12","id":"power-armor-teksti"},
        {"armorid":"10","armor":"robe","damageResistance":"20","damageThreshold":"0","id":"robe-teksti"}
    ]};
    let name = statsit[ 'armorit' ][ armorid ][ "armor" ];
    let dr = statsit[ 'armorit' ][ armorid ][ "damageResistance" ];
    let dt = statsit[ 'armorit' ][ armorid ][ "damageThreshold" ];
    document.getElementById('statsit').innerHTML = name + "<br>Damage resistance: " + dr + " Damage threshold: " + dt;
    saveSelection(armorid);
    }
    function saveSelection(armorid) {
        localStorage.setItem('current-armor',armorid);
    }
    function loadSelection() {
        if ( localStorage.getItem('current-armor') != null ) {
            changeText(localStorage.getItem('current-armor'));
            document.getElementById('valittu').src=localStorage.getItem('current-picture');
        }
    }