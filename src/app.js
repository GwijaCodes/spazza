//dati array
const settimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const raccolta = ["UMIDO", "SECCO", "UMIDO+VETRO", "PLASTICA", "CARTA", "UMIDO+METALLO", "RIPOSO"]
const colori = ['images/rosso.jpg', 'images/grigio.jpeg', 'images/verde.jpg', 'images/giallo.jpg', 'images/blu.jpg', 'images/verde.jpg', 'images/sabato.jpg'];

//mostra data
let date = new Date();
let weekday = settimana[date.getDay()];
let month = mesi[date.getMonth()];
let day = date.getDate();
let oggi = document.querySelector('#oggi').innerHTML = `${weekday} ${day} ${month}`

//mostra cosa buttare oggi e domani
let spazza = raccolta[date.getDay()];
let spazzaText = document.querySelector('#spazzaText').innerHTML = spazza;
let domani = document.querySelector('#spazzaDomani');

//loop da sabato a domenica
if (date.getDay() >= raccolta.length - 1){
    domani.innerHTML = raccolta[0];
} else {
    domani.innerHTML = raccolta[date.getDay() + 1];
}

//cambia sfondo
let sfondo = document.querySelector('#background').src = colori[date.getDay()];

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


//snackbar
let ora = date.getHours();
const snackbarContainer = document.querySelector('.snackbar-container')
const snackbar = document.querySelector('.snackbar');
const snackbarText = document.querySelector('#snackbarText');
const snackbarButton = document.querySelector('#snackbarButton');

snackbarButton.addEventListener('click', () => {
    snackbar.style.animation = 'fadeout 0.5s';
    setTimeout(() => {
        snackbar.style.visibility = 'hidden';
    }, 300)
})


    //contenuto snackbar
if (ora <= 19){
    snackbarText.innerHTML = 'Ricorda di ritirare il bidone!';
} /* else {
    snackbarText.innerHTML = 'Hai portato fuori la spazza?';
    snackbarButton.innerHTML = 'SI'
    const negative = snackbarButton.appendChild(document.createElement('button'));
    negative.innerHTML = 'NO';
    negative.style.paddingLeft = '20px';
}*/

    //frequenza snackbar




