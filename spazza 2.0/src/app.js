//dati array
const settimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const raccolta = ["UMIDO", "SECCO", "UMIDO+VETRO", "PLASTICA", "CARTA", "UMIDO+METALLO", "niente zì"]
const colori = ['images/rosso.jpg', 'images/grigio.jpg', 'images/verde.jpg', 'images/giallo.jpg', 'images/blu.jpg', 'images/verde.jpg', 'images/sabato.jpg'];

//mostra data
let date = new Date();
let weekday = settimana[date.getDay()];
let month = mesi[date.getMonth()];
let day = date.getDate();
let data = document.querySelector('#data').innerHTML = `${weekday} ${day} ${month}`

//mostra cosa buttare oggi e domani
let spazza = raccolta[date.getDay()];
let spazzaText = document.querySelector('#spazzaText').innerHTML = spazza;
let domani = document.querySelector('#spazzaDomani').innerHTML = raccolta[date.getDay() + 1];
if (spazza >= raccolta.length){
    domani.innerHTML = raccolta[0];
}

//cambia sfondo
let sfondo = document.querySelector('#background').src = colori[date.getDay()];

//calendario espandibile
let calendarioCollapsed = document.querySelector('.calendarioCollapsed');
let calendarioFull = document.querySelector('.calendarioFull');
let calendario = document.querySelector('.calendario').addEventListener('click', (e)=>{
    calendarioCollapsed.classList.toggle('invisible');
    calendarioFull.classList.toggle('visible');
});

//service worker check
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log('SW Registered!');
        console.log(registration);
    }).catch(error =>{
        console.log("SW Registration failed...");
        console.log(error);
    });
}