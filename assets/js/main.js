function countHome1() {
    var einenPunkt = Number(document.getElementById("score1").innerHTML);
    einenPunkt += 1;
  
    document.getElementById("score1").innerHTML = einenPunkt;
}

function countGuest1() {
    var einenPunkt = Number(document.getElementById("score2").innerHTML);
    einenPunkt += 1;
  
    document.getElementById("score2").innerHTML = einenPunkt;
}

function countHome2() {
    var zweiPunkte = Number(document.getElementById("score1").innerHTML);
    zweiPunkte += 2;
  
    document.getElementById("score1").innerHTML = zweiPunkte;
}

function countGuest2() {
    var zweiPunkte = Number(document.getElementById("score2").innerHTML);
    zweiPunkte += 2;
  
    document.getElementById("score2").innerHTML = zweiPunkte;
}

function countHome3() {
    var dreiPunkte = Number(document.getElementById("score1").innerHTML);
    dreiPunkte += 3;
  
    document.getElementById("score1").innerHTML = dreiPunkte;
}

function countGuest3() {
    var dreiPunkte = Number(document.getElementById("score2").innerHTML);
    dreiPunkte += 3;
  
    document.getElementById("score2").innerHTML = dreiPunkte;
}

function resetCounter() {
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
};

let HomeName = prompt("Name der Heim-Mannschaft");
let GuestName = prompt("Name der Gast-Mannschaft");
document.getElementById("teamName1").innerHTML = HomeName;
document.getElementById("teamName2").innerHTML = GuestName;