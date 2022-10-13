"use strict";

function date() {
    let date = new Date();
    let paiva = date.getDate();
    let kk = date.getMonth();
    let vuosi = date.getFullYear();
    let pvm = ("Tänään on " + paiva + "." + kk + "." + vuosi);
    document.getElementById('pvm').innerHTML = pvm;
}
function changePic(source,armorid) {
    document.getElementById('valittu').src=source;
    changeText(armorid);
}
 /*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/

    /*
    let json = fetch('https://kissaritari.github.io/kissa/media/statsit.json');
    console.log(json)
    const dict = JSON.parse(json);
    if (data[0]['armorid'] == armorid) {
        let name = dict[0]['armor'];
        let dr = dict[0]['damageResistance'];
        let dt = dict[0]['damageThreshold'];
        document.getElementById('statsit').innerHTML = name + "Damage resistance: " + dr + " Damage threshold" + dt ;
        */

function changeText(armorid) {
    /* en saanu millää tuota jsonia toimimaan ulkoisesta tiedostosta : () */
    let statsit = {"armorit":[
        {"armorid":"0","armor":"Brotherhood Armor","damageResistance":"40","damageThreshold":"8","id":"brotherhood-armor-teksti" },
        {"armorid":"1","armor":"Combat Armor mk2","damageResistance":"40","damageThreshold":"6","id":"combat-armor-mk2-teksti"},
        {"armorid":"2","armor":"combatArmor","damageResistance":"40","damageThreshold":"5","id":"combat-armor-teksti"},
        {"armorid":"3","armor":"leatherArmorMk2","damageResistance":"25","damageThreshold":"3","id":"leather-armor-mk2-teksti"},
        {"armorid":"4","armor":"leatherArmor","damageResistance":"20","damageThreshold":"2","id":"leather-armor-teksti"},
        {"armorid":"5","armor":"leatherJacketMk2","damageResistance":"30","damageThreshold":"2","id":"leather-jacket-mk2-teksti"},
        {"armorid":"6","armor":"metalArmor","damageResistance":"30","damageThreshold":"4","id":"metal-armor-teksti"},
        {"armorid":"7","armor":"metalArmorMk2","damageResistance":"35","damageThreshold":"4","id":"metal-armor-mk2-teksti"},
        {"armorid":"8","armor":"teslaArmor","damageResistance":"20","damageThreshold":"4","id":"tesla-armor-teksti"},
        {"armorid":"9","armor":"powerArmor","damageResistance":"40","damageThreshold":"12","id":"power-armor-teksti"},
        {"armorid":"10","armor":"robe","damageResistance":"20","damageThreshold":"0","id":"robe-teksti"}
    ]}
    // ei myöskään onnistu millää lukea täältä jsonista -.-
    console.log(statsit)
    let name = statsit.armor;
    let dr = statsit.damageResistance;
    let dt = statsit.damageThreshold;
    document.getElementById('statsit').innerHTML = name + "<br>Damage resistance: " + dr + " Damage threshold" + dt ;
    }
