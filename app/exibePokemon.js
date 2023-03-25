
const elementoParaInserirPoke = document.getElementById('secao-pokemon');


function exibePokeNaTela(pokemons) {
    elementoParaInserirPoke.innerHTML = ''


    pokemons.forEach(pokemon => {


        // let check = pokemon.capturado;

        // let bool = (check === 'true');


        //         elementoParaInserirPoke.innerHTML += `

        //         <div class="pokemon">
        //             <div class="img__pokemon"><img src="${pokemon.img}" alt=""></div>
        //             <div class="dados__pokemon">
        //                 <ul class="poke__dados">
        //                     <li class="poke__info" id="pokemon-nome">${pokemon.nome}</li>
        //                     <li class="poke__info" id="pokemon-tipo">${pokemon.tipo}</li>
        //                     <li class="poke__info" id="pokemon-localizacao">${pokemon.localizacao}</li>
        //                     <li class="poke__info" id="poke-cap" >
        //                     <input type="checkbox" data-id="${pokemon.id}" value="${pokemon.capturado}"  id="pokemon-capturado" name='capturado'><label for="pokemon-capturado">Capturado?</label></li>
        //                 </ul>
        //             </div>
        //         </div

        //         `



        const divPokemon = document.createElement('div')
        divPokemon.classList.add('pokemon')
        elementoParaInserirPoke.appendChild(divPokemon);

        const divPokeImg = document.createElement('div')
        divPokeImg.classList.add('img_pokemon')
        divPokeImg.src = pokemon.img
        // divPokeImg.alt = 
        const imgPoke = document.createElement('img')
        imgPoke.alt = "Imagem representativa do pokemon"
        imgPoke.src = pokemon.img
        divPokeImg.appendChild(imgPoke)
        divPokemon.appendChild(divPokeImg)

        const divDadosPoke = document.createElement('div')
        divDadosPoke.classList.add('dados__pokemon')

        const pokeNome = document.createElement('p')
        const pokeNomeStrong = document.createElement('strong')
        pokeNomeStrong.innerText = pokemon.nome
        pokeNome.classList.add('poke__info')
        pokeNome.appendChild(pokeNomeStrong)

        const pokeLocal = document.createElement('p')
        pokeLocal.innerText = pokemon.localizacao
        pokeLocal.classList.add('poke__info')

        const capturedCheckbox = document.createElement("input")
        capturedCheckbox.type = "checkbox"
        // capturedCheckbox.id = 'pokemon-capturado'
        capturedCheckbox.id = pokemon.id
        capturedCheckbox.dataset.id = 'pokemon-capturado'
        capturedCheckbox.classList.add('poke__info__check')
        capturedCheckbox.checked = pokemon.capturado

        // const labelCap = document.createElement('label')
        // labelCap.htmlFor = 'pokemon-capturado'
        // labelCap.textContent = "Capturado?"


        // capturedCheckbox.insertAdjacentElement("beforebegin", labelCap)

        divDadosPoke.appendChild(pokeNome)
        divDadosPoke.appendChild(pokeLocal)
        divDadosPoke.appendChild(capturedCheckbox)

        divPokemon.appendChild(divDadosPoke)


    })

}


// function toBool(value){
//     const parseBool = value =>
//       ['true', 'false'].includes(value) ? value === true : null
// }





// const elementoCheck = document.querySelectorAll('input')

// elementoCheck.addEventListener('change', () => {
//     console.log('teste')
// })