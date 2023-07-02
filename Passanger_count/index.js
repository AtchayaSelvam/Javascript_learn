//document.getElementById("counter-el").innerText = 5;
let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("counter-el");
let count = 0;
function increment(){

    count += 1;
    countEl.innerText = count;
}
function save(){
  let  entries = count + " - ";
    saveEl.textContent+= entries;

}