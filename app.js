const form =document.querySelector('#form');
const content=document.querySelector('#content');

const age = prompt('Du måste vara över 20 år för att få tillgång till sidan. Hur gammal är du?');

if (age >= 19) {
    //visa hemsidan
    content.style.display = 'block';
    const name = prompt('Vad heter du?');
    document.querySelector('.message').innerText = 'Välkommen ' + name + ' till mig!';
    document.querySelector('#enter').className = 'granted';

} else {
        // inte gammal nog. Visa en annan sida.
        alert('Ledsen!')
        document.location="http://www.google.se";

}

document.getElementById("okButton")
        .addEventListener("click", function() {
  document.getElementById("absolut").hidden = true;
  document.getElementById("aboutme").hidden = false;
}, false);

const intressen = ['Mina barn', 'Min fru', 'Fotboll', 'Musik', 'Programmering', 'Matlagning', 'Träning']; // array

//console.log(shoppingList);

// koppla Js till HTML med ul#list
const list = document.querySelector('#list');

// loop genom shoppinglist från rad 1
for (let i = 0; i < intressen.length; i++) {
    // console.log(shoppingList[i]);
    let itemInList =intressen[i]; //varje individuell sak i shoppingList array
    let li =document.createElement('li'); // skapa en list item
    li.innerHTML = itemInList; //lägg till varje individuell sak i en list item
    list.appendChild(li); // lägg till varje individuell sak som är i en egen list item i ul#list.
}

