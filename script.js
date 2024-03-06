const decrementBtn =document.getElementById("decrementBtn");
const resetBtn=document.getElementById("resetBtn");
const incrementBtn =document.getElementById("incrementBtn");
const countlabel=document.getElementById("countlabel");
let count= 0;


incrementBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decrementBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count= 0;
    countlabel.textContent = count;
}
