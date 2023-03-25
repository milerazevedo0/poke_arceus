// const pokemons2 = [
//     {
//         id: 1,
//         nome: 'Rowlet',
//         localizacao: 'Presente do Prof. Laventon, Space-time Distortion e Massive Mass Outbreak em Coronet Highlands',
//         capturado: false,
//         img: 'https://www.serebii.net/legendsarceus/pokemon/small/722.png',
//     },

//     {
//         id: 2,
//         nome: 'Dartrix',
//         localizacao: 'Space-time Distortion e Massive Mass Outbreak em Coronet Highlands',
//         capturado: true,
//         img: 'https://www.serebii.net/legendsarceus/pokemon/small/723.png',
//     },

//     {
//         id: 3,
//         nome: 'Decidueye',
//         localizacao: 'Space-time Distortion e Massive Mass Outbreak em Coronet Highlands',
//         capturado: false,
//         img: 'https://www.serebii.net/legendsarceus/pokemon/small/724-h.png',
//     },

// ]; 


const pokemons = []

const fetchPokemon = async () =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokedex/hisui/`) //(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await APIResponse.json();
    const dados = await data['pokemon_entries']

    await dados.forEach(async element => {
        const pokeId = element['entry_number']
        const pokeNome = element['pokemon_species']['name']
        const url = element['pokemon_species']['url']
        const arrayUrl = url.split("/")
        const pokeNumber = arrayUrl[arrayUrl.length -2]

        await fetchPokeImg(pokeId, pokeNome, pokeNumber)
        
    }
    
    );
}

const fetchPokeImg = async (id, nome, numero) => {

    
    try{
        let pokeNumero = numero
        let pokeId = id 
        let pokeNome = nome
        const imgNotFound = "https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png"
        let pokeimage =""
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumero}`)
        if(!APIResponse.ok){
            
            pokeimage = imgNotFound
            
            throw new Error("Pokemon não encontrado")
        }
        const data = await APIResponse.json()
       
        const imgAnimada = await data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        const imgEstatica = await data['sprites']['front_default']

        if(imgAnimada){
            pokeimage = imgAnimada

        }else{
            pokeimage = imgEstatica
        }
        
        const pokemon = {id: pokeId, nome: pokeNome,localizacao: null, capturado: false, img: pokeimage}
        pokemons.push(pokemon)
       
    }catch(error){
        console.error(`Ocorreu um erro: ${error}`)
    }
 
}


fetchPokemon();

const salvaLocalStorage = () =>{
    localStorage.setItem('pokemons', JSON.stringify(pokemons));

}

if(localStorage.getItem("pokemons") == null){
    setTimeout(salvaLocalStorage, 1000)
     setTimeout(function(){
        window.location.reload()
    }, 2000)
}


pokeStorage = JSON.parse(localStorage.getItem("pokemons")) || []

pokeStorage.sort((a,b) => a.id - b.id)

exibePokeNaTela(pokeStorage)



