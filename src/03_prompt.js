// --> installiern mit: npm i prompt-sync

const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...
let firstName = prompt("Vorname?: ");
let familyName = prompt("Name?: ");
console.log("Hallo, " + firstName + " " + familyName +"!");

let TributeToHamburg = prompt("DeichKind");
let tributeToHamburg = prompt("Hamburg");
console.log("TributeToHamburg " + tributeToHamburg +"!");