import { kocsiLista } from "./adat.js";

let articleElem = document.getElementById("art");

export function egyAutoMegjelenit(lista, index) {
    const auto = lista[index];
    articleElem.innerHTML += `<div class="modellek">
                               <h3>${auto.nev}</h3>
                               <img src="${auto.kep}" alt="skoda">
                               <p>${auto.ar}</p>
                               <div class="gombok">
                                   <button data-index="${index}" class="konfGomb">Konfigurálás</button>
                                   <button>Rendelés</button>
                               </div>
                           </div>`;
}

export function autoMegjelenit(lista) {
    for (let index = 0; index < lista.length; index++) {
        egyAutoMegjelenit(lista, index);
    }
    const konfGombok = document.querySelectorAll(".konfGomb");
    for (let i = 0; i < konfGombok.length; i++) {
        konfGombok[i].addEventListener("click", function() {
            const auto = lista[konfGombok[i].dataset.index];
            console.log("Kocsi neve: " + auto.nev + "\nKép URL: " + auto.kep + "\nÁr: " + auto.ar);
        });
    }
    
}