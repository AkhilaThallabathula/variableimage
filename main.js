var score=0;

function change(){
    score=score-5;
    document.getElementById("holder").textContent=score;
}
function changeimg(){
    score=score+5;
    document.getElementById("holder").textContent=score;
}