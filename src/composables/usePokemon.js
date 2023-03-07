import axios from "axios"
import { ref } from "vue"


const usePokemon = ( pokemonId = 1 ) => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const SearchPokemon = async( id ) => {

        if ( !id ) return

        isLoading.value = true
        pokemon.value = null

        try {

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            console.log(data);
            pokemon.value = data
            errorMessage.value = null
            
        } catch (error) {
            errorMessage.value = 'No se pudo cargar el pokemon'
        }

        isLoading.value = false

    }

    SearchPokemon( pokemonId )

    return {
        errorMessage,
        isLoading,
        pokemon,

        SearchPokemon
    }

}

export default usePokemon