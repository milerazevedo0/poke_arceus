const botoes = document.querySelectorAll('.btn');
const exibeTotal = document.getElementById('exibe_total')

botoes.forEach(btn => btn.addEventListener('click', filtraPoke))

function filtraPoke() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    
    if (categoria == 'todos' || categoria == 'capturados' || categoria == 'naocapturados') {
        let pokeFiltrado = categoria == 'todos' ? pokeStorage : filtraCapturado(categoria)
        let total = pokeFiltrado.length

        exibeTotal.innerHTML = total

        exibePokeNaTela(pokeFiltrado)
        salvaPokemon();
    }
}

function filtraCapturado(categoria) {

    if (categoria == 'capturados') {

        const capturados = pokeStorage.filter(pokemon => pokemon.capturado == true );
        return capturados

    } else if (categoria == 'naocapturados') {
        const naoCapturado = pokeStorage.filter(pokemon => pokemon.capturado == false )
        return naoCapturado
    } 
}


