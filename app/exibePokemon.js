
const elementoParaInserirPoke = document.getElementById('secao-pokemon');
const elementoTotal = document.getElementById('exibe_total')

function exibePokeNaTela(pokemons) {
    elementoParaInserirPoke.innerHTML = ''
    let total = 'Total de Pokemons: ' + pokemons.length

    elementoTotal.innerHTML = total

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
        const imgPoke = document.createElement('img')
        imgPoke.alt = "Imagem representativa do pokemon"
        imgPoke.src = pokemon.img
        divPokeImg.appendChild(imgPoke)
        divPokemon.appendChild(divPokeImg)

        const divDadosPoke = document.createElement('div')
        divDadosPoke.classList.add('dados__pokemon')

        const pokeId = document.createElement('p')
        const pokeNomeStrong = document.createElement('strong')
        pokeNomeStrong.innerText = pokemon.id
        pokeId.classList.add('poke__info')
        pokeId.appendChild(pokeNomeStrong)

        const pokeNome = document.createElement('p')
        pokeNome.innerText = pokemon.nome
        pokeNome.classList.add('poke__info')

        const capturedCheckbox = document.createElement("input")
        capturedCheckbox.type = "checkbox"
        capturedCheckbox.id = pokemon.id
        capturedCheckbox.dataset.id = 'pokemon-capturado'
        capturedCheckbox.classList.add('poke__info__check')
        capturedCheckbox.checked = pokemon.capturado

        // const labelCap = document.createElement('label')
        // labelCap.htmlFor = 'pokemon-capturado'
        // labelCap.textContent = "Capturado?"

        // capturedCheckbox.insertAdjacentElement("beforebegin", labelCap)

        divDadosPoke.appendChild(pokeId)
        divDadosPoke.appendChild(pokeNome)
        divDadosPoke.appendChild(capturedCheckbox)

        divPokemon.appendChild(divDadosPoke)
    })

}