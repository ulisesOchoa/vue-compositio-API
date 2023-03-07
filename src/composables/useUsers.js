import axios from "axios"
import { ref } from "vue"


const useUsers = () => {

    const users        = ref([])
    const isLoading    = ref(true)
    const curretPage   = ref(1)
    const errorMessage = ref(null)

    const getUsers = async( page = 1 ) => {

        if ( page <= 0 ) page = 1

        isLoading.value = true

        const { data } = await axios.get('https://reqres.in/api/users', {
            params: { page }
        })

        if ( data.data.length > 0 ) {
            users.value = data.data
            curretPage.value = page  
            errorMessage.value = null                 
        }else if ( curretPage.value > 0 ) {
            errorMessage.value = 'No hay ma registros'
        }

        isLoading.value = false
    }

    getUsers()

    return {
        curretPage,
        errorMessage,
        isLoading,
        users,

        nextPage: () => getUsers( curretPage.value + 1 ),
        prevPage: () => getUsers( curretPage.value - 1 ),
    }

}

export default useUsers