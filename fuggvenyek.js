let articleElem = document.getElementById("art")

export function egyAutoMegjelenit(lista, index) {
    articleElem.innerHTML+=`<div class="modellek">
                               <h3>${lista[index].nev}</h3>
                               <img src="${lista[index].kep}" alt="skoda">
                               <p>${lista[index].ar}</p>
                               <div class="gombok">
                                   <button>Konfigurálás</button>
                                   <button>Rendelés</button>
                               </div>
                           </div>`
}

export function autoMegjelenit(lista){
    for (let index = 0; index < lista.length; index++) {
        egyAutoMegjelenit(lista, index)
    }
}