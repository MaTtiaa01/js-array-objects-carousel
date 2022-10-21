/*Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    -mi seleziono le immagini di ogni oggetto e le inserisco dinamicamente 

Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
    -mi creo una classe active da mettere e togliere con .toggle alle varie immagini
    -mi seleziono il testo e il titolo con map per poi inserirlo con ${}
    


Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1 (opzionale):
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/


const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//select DOM element
const slideEl = document.querySelector(".slide");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

//inserisco le immagini dinamicamente
const imgUrl = images.map((element) => {
    return element.image
})

//console.log(imgUrl);
//console.log(imgUrl[0]);
let imgActive = 0;
for (let i = 0; i < imgUrl.length; i++) {
    const element = imgUrl[i];
    const imgMarkup =  `<img class="${i === imgActive ? "active" : ""}" src="./assets/img/${element}" alt="">`;
    slideEl.insertAdjacentHTML("beforeend",imgMarkup) 
    
}

// let imgActive = 0;
// imgUrl.forEach((element,i=0) => {
//     element = imgUrl[i];
//     imgMarkup = `<img class="${i === imgActive ? "active" : ""}" src="./assets/img/${element}" alt="">`;
//     slideEl.insertAdjacentHTML("afterbegin",imgMarkup); 
// })


console.log(imgUrl);
//aggiungo un event listener ai miei bottoni



nextEl.addEventListener("click", function () {
   const slides = document.querySelectorAll(".slide > img")
   console.log(slides);

    const currentImg = slides[imgActive];
    console.log(currentImg);
    currentImg.classList.remove("active");
    if (imgActive < 4) {
        currentImg.classList.remove("active");
        imgActive++
        
    }else{
        imgActive = 0
    }

    const nextImg = slides[imgActive];
    nextImg.classList.add("active");
    
   
})

prevEl.addEventListener("click", function () {
    const slides = document.querySelectorAll(".slide > img")
    console.log(slides);
 
     const currentImg = slides[imgActive];
     console.log(currentImg);
     currentImg.classList.remove("active");
     if (imgActive > 0) {
        currentImg.classList.remove("active");
        imgActive--
     }else{
         imgActive = slides.length -1;
        console.log(slides.length -1);
     }
 
     const nextImg = slides[imgActive];
     nextImg.classList.add("active");
     
    
 })
