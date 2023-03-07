<template>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir Modal</button>

    <Modal 
        title="Hola mundo"
        v-if="isOpen"
        @on:close="closeModal"
    >
        <template v-slot:header>
            <h2>Titulo del modal</h2>
            <hr>
        </template>
        
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias adipisci quidem e?</p>
            <hr>
        </template>

        <template v-slot:footer>
            <button @click="closeModal" >Salir</button>
        </template>

        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>
        </template>
    </Modal>
</template>

<script>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';

export default {

    components: { Modal },
    
    setup() {

        const isOpen = ref(false)
        
        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }

    }

}
</script>

<style lang="scss" scoped>

</style>