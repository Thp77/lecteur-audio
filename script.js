const titre = document.querySelector('.titre');
const suivant = document.querySelector('.suivant');
const retour = document.querySelector('.retour');
const play = document.querySelector('.playpause');
const audio = document.querySelector('audio');
const img = document.querySelector('img');


const liste = [
    {
        src :"./src/Central Cee - Doja (Directed by Cole Bennett).mp3",
        nom :" Central Cee",
        img:"./src/angkorwat.jpg",
    },
    {
        src :"./src/Prince Royce, Maria Becerra - Te Espero (Official Video).mp3",
        nom :" Te Espero",
        img:"./src/angkor.jpg",
    },
    {
        src :"./src/Prince Royce, Nicky Jam, Jay Wheeler - Si Te Preguntan... (Official Video).mp3",
        nom :" Si te Preguntan",
        img:"./src/crumble-de-bar-puree-.jpg",
    },
    {
        src :"./src/Romeo Santos - Propuesta Indecente (Official Video).mp3",
        nom :" Propuesta Indecente",
        img:"./src/jump.jpg",
    },
    {
        src :"./src/Romeo Santos - Sus Huellas (Official Video).mp3",
        nom :" Sus huellas",
        img:"./src/hand.jpg",
    },

];



// joue la musique au click et l'arrete //

let musiquePlay = false;

function playMusique(){
    musiquePlay = true;
    audio.play();
    play.classList.add('active');
    play.innerHTML =`<ion-icon name="play-circle-outline"</ion-icon>`
    
}
function pauseMusique(){
    musiquePlay = false;
    audio.pause();
    play.classList.remove('active');
    play.innerHTML =`<ion-icon name="pause-circle-outline"</ion-icon>`
    
}




play.addEventListener('click', () =>
 (
    musiquePlay ? pauseMusique() 
                : playMusique()
 ));

 function chargeMusique(liste){
    titre.textContent = liste.nom;
    audio.src = liste.src;
    img.src = liste.img;
    
 }

 let i = 1;

 chargeMusique(liste[i]);

// retourne à la musique précédente //

 function retourMusique (){

    i--;
    if( i< 0 ){
        i = liste.length -1;
    }
    chargeMusique(liste[i]);
    playMusique();
 }

 retour.addEventListener('click', retourMusique);

 // avance d'une musique  //


 function suivantMusique (){

    i++;
    if( i> liste.length -1  ){
        i = 0;
    }
    chargeMusique(liste[i]);
    playMusique();
 }

 suivant.addEventListener('click', suivantMusique);
