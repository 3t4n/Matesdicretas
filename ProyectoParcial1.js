function verifynot()
{
    let not1 = document.getElementById("not1");
    let not1ch = document.getElementById("not1ch");
    let not2 = document.getElementById("not2");
    let not2ch = document.getElementById("not2ch");
    if(( not1.value == 'F')||( not1.value == 'f')){
        not1ch.innerHTML = "correct";
    }
    else{
        not1ch.innerHTML = "incorrect";
    }
    if(( not2.value == 'T')||( not2.value == 't')){
        not2ch.innerHTML = "correct";
    }
    else{
        not2ch.innerHTML = "incorrect";
    }
}
function verifydis()
{
    let dis1 = document.getElementById("dis1");
    let dis1ch = document.getElementById("dis1ch");
    let dis2 = document.getElementById("dis2");
    let dis2ch = document.getElementById("dis2ch");
    let dis3 = document.getElementById("dis3");
    let dis3ch = document.getElementById("dis3ch");
    let dis4 = document.getElementById("dis4");
    let dis4ch = document.getElementById("dis4ch");
    if(( dis1.value == 'T')||( dis1.value == 't')){
        dis1ch.innerHTML = "correct";
    }
    else{
        dis1ch.innerHTML = "incorrect";
    }
    if(( dis2.value == 'T')||( dis2.value == 't')){
        dis2ch.innerHTML = "correct";
    }
    else{
        dis2ch.innerHTML = "incorrect";
    }
    if(( dis3.value == 'F')||( dis3.value == 'f')){
        dis3ch.innerHTML = "correct";
    }
    else{
        dis3ch.innerHTML = "incorrect";
    }
    if(( dis4.value == 'T')||( dis4.value == 't')){
        dis4ch.innerHTML = "correct";
    }
    else{
        dis4ch.innerHTML = "incorrect";
    }
}
function verifycon()
{
    let dis1 = document.getElementById("con1");
    let dis1ch = document.getElementById("con1ch");
    let dis2 = document.getElementById("con2");
    let dis2ch = document.getElementById("con2ch");
    let dis3 = document.getElementById("con3");
    let dis3ch = document.getElementById("con3ch");
    let dis4 = document.getElementById("con4");
    let dis4ch = document.getElementById("con4ch");
    if(( dis1.value == 'F')||( dis1.value == 'f')){
        dis1ch.innerHTML = "correct";
    }
    else{
        dis1ch.innerHTML = "incorrect";
    }
    if(( dis2.value == 'T')||( dis2.value == 't')){
        dis2ch.innerHTML = "correct";
    }
    else{
        dis2ch.innerHTML = "incorrect";
    }
    if(( dis3.value == 'F')||( dis3.value == 'f')){
        dis3ch.innerHTML = "correct";
    }
    else{
        dis3ch.innerHTML = "incorrect";
    }
    if(( dis4.value == 'F')||( dis4.value == 'f')){
        dis4ch.innerHTML = "correct";
    }
    else{
        dis4ch.innerHTML = "incorrect";
    }
}
function verifyco()
{
    let dis1 = document.getElementById("co1");
    let dis1ch = document.getElementById("co1ch");
    let dis2 = document.getElementById("co2");
    let dis2ch = document.getElementById("co2ch");
    let dis3 = document.getElementById("co3");
    let dis3ch = document.getElementById("co3ch");
    let dis4 = document.getElementById("co4");
    let dis4ch = document.getElementById("co4ch");
    if(( dis1.value == 'F')||( dis1.value == 'f')){
        dis1ch.innerHTML = "correct";
    }
    else{
        dis1ch.innerHTML = "incorrect";
    }
    if(( dis2.value == 'T')||( dis2.value == 't')){
        dis2ch.innerHTML = "correct";
    }
    else{
        dis2ch.innerHTML = "incorrect";
    }
    if(( dis3.value == 'T')||( dis3.value == 't')){
        dis3ch.innerHTML = "correct";
    }
    else{
        dis3ch.innerHTML = "incorrect";
    }
    if(( dis4.value == 'T')||( dis4.value == 't')){
        dis4ch.innerHTML = "correct";
    }
    else{
        dis4ch.innerHTML = "incorrect";
    }
}
var bnot = document.getElementById("bnot");
var bdis = document.getElementById("bdis");
var bcon = document.getElementById("bcon");
var bco = document.getElementById("bco");
bco.addEventListener("click", verifyco);
bcon.addEventListener("click", verifycon);
bnot.addEventListener("click", verifynot);
bdis.addEventListener("click", verifydis);