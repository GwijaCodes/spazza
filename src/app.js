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
let data = document.querySelector('#data').innerHTML = `${weekday} ${day} ${month}`

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


//Notifiche

const click = document.querySelector('.greetings');

click.addEventListener('click', ()=>{
    Notification.requestPermission().then(perm =>{
        if (perm === 'granted'){
            new Notification("Ayo there", {
                body: 'yooooo my guy'
            });
        }
    })
})


