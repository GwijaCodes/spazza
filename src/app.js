//dati array
const settimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const raccolta = ["Umido", "Secco", "Umido e Vetro", "Plastica", "Carta", "Umido e Metallo", "Buon Sabato"]
const colori = ['images/rosso.jpg', 'images/grigio.jpeg', 'images/verde.jpg', 'images/giallo.jpg', 'images/blu.jpg', 'images/verde.jpg', 'images/sabato.jpg'];

//mostra data
let date = new Date();
let dayN = date.getDay();
let weekday = settimana[dayN];
let month = mesi[date.getMonth()];
let day = date.getDate();
let oggi = document.querySelector('#oggi').innerHTML = `${weekday} ${day} ${month}`

//mostra cosa buttare oggi e domani
let spazza = raccolta[dayN];
let spazzaText = document.querySelector('#spazzaText').innerHTML = spazza;
let domani = document.querySelector('#spazzaDomani');
//trashbin
const trashbin = document.querySelector('.trashbin');
trashbin.style.backgroundPositionX = 1365 - (195 * dayN) + 'px';

console.log(trashbin.style.backgroundPositionX)

//loop da sabato a domenica
if (dayN >= raccolta.length - 1){
    domani.innerHTML = raccolta[0];
} else {
    domani.innerHTML = raccolta[dayN + 1];
}

//calendario espandibile
let calendarioCollapsed = document.querySelector('.calendarioCollapsed');
let calendarioFull = document.querySelector('.calendarioFull');
let calendario = document.querySelector('.calendario').addEventListener('click', (e)=>{
    if(calendarioFull.style.maxHeight){
        calendarioFull.style.maxHeight = null;
        calendarioCollapsed.classList.toggle('invisible');

    } else {
        calendarioFull.style.maxHeight = calendarioFull.scrollHeight + 'px';
        calendarioCollapsed.classList.toggle('invisible');

    }
});

//sw
window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("../sw.js");
    }
  });




