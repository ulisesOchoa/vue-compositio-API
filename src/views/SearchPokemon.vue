<template>
    <h1>Buscar pokemmon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input 
            type="numbre"
            placeholder="Número del pókemon"
            v-model="pokemonId" 
            ref="txtSearchId"
        >


    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        
        setup() {

            const router = useRouter()
            
            const pokemonId = ref(1)
            const txtSearchId = ref()
            // se utiliza este siclo de vida ya que estamso usando Router keep-alive 
            onActivated(() => {
                txtSearchId.value.select()
            })

            return {
                pokemonId,
                txtSearchId,

                onSubmit: () => {                    
                    router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
                }
            }

        }

    }
</script>
