"use strict"; 
/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

//*Milestone 0:
Come sempre focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

//*Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile 
e dovremo aggiungervi titolo e testo.

//!Milestone 2:
Aggiungere il **ciclo infinito** del carosello. 
Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa 
per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

//!BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/ 

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// VARIABILI
const imagesHtml = document.querySelector('.mycontainer');
const thumbnailsHtml = document.querySelector('.box-thumbnails'); 
const btnF = document.querySelector('.arrow-forward');
const btnB = document.querySelector('.arrow-back');

// STAMPO NEL DOM CON UN LOOP
let activeImage = 0;
for (let i = 0; i < images.length; i++){
    let place = images[i];
    let activeClass = '';
    let activeThumbN = '';
    if (i == activeImage){
        activeClass = 'active';
        activeThumbN  = 'active-thumbnail';
    }
    imagesHtml.innerHTML += `
        <div class="box-img ${activeClass}">
            <img src="${place.url}" class="slide_img" alt="${place.title}">  
            <div class="slide-text">
                <h2>${place.title}</h2>
                <p>${place.description}</p>
            </div>
        </div>  
    `;

    thumbnailsHtml.innerHTML += `
        <div class="thumbnails">
            <img src="${place.url}" class ="thumbnail ${activeThumbN}" alt="${place.title}">
        </div>
    `;
}

// VARIABILI PER FRECCE
const imagesElements = document.querySelectorAll('div.box-img');
 console.log(imagesElements);

 const thumbnailsElement = document.querySelectorAll('.thumbnails>img');
 console.log(thumbnailsElement);

 // FUNZIONI AVANTI --> E INDIETRO <--
btnF.addEventListener(`click`, function(){
    const imgActive = document.querySelector('div.active');
    imgActive.classList.remove('active');

    const thumbnailActive = document.querySelector('img.active-thumbnail'); 
    thumbnailActive.classList.remove('active-thumbnail');                   

     activeImage++;
     if (activeImage === images.length){
        activeImage = 0;
     }
     imagesElements[activeImage].classList.add('active');
     thumbnailsElement[activeImage].classList.add('active-thumbnail');  
});

btnB.addEventListener(`click`, function(){
    imagesElements[activeImage].classList.remove('active');
    thumbnailsElement[activeImage].classList.remove('active-thumbnail');  
    activeImage--;

    if (activeImage === - 1){
        activeImage = images.length - 1;
     }

    imagesElements[activeImage].classList.add('active');
    thumbnailsElement[activeImage].classList.add('active-thumbnail');  
});

/*const array = [1, 2, 3];

createCarousel(array);

array.current(); // Returns "1"

array.next(); // Returns "2"

array.next(); // Returns "3"

array.previous(); // Returns "2"

array.reset(); // Returns "1"

const createCarousel = (array) => {
    array.index = 0;
    array.current = function() {
        this.index = this.index % array.len;
        return array[this.index];
    };
    array.next = function() {
        this.index++;
        return this.current();
    };
    array.previous = function() {
        this.index += array.len - 1;
        return this.current();
    };
    array.reset = function() {
        this.index = 0;
        return array[0];
    };
};
*/

