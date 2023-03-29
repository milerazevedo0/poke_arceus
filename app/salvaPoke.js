
function salvaPokemon(){

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const id = checkbox.id
            const capturado = checkbox.checked
            for (let i = 0; i < pokeStorage.length; i++) {
                if (pokeStorage[i].id == id) {
                    pokeStorage[i].capturado = capturado
                }
            }
            localStorage.setItem('pokemons', JSON.stringify(pokeStorage))
        });
    });
}

salvaPokemon();