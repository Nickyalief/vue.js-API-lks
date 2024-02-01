import http from "@/config/axiosConfig";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export default function useSocieties() {
    const url = ref('/society')
    const societies = ref ([])
    const society = ref ([])
    const errors = ref({})
    const router = useRouter()

    // Mengambil data semua user pada database
    const getSocieties = async () => {
        const response = await http.get(url.value)

        console.log(response.data)
        societies.value = response.data.data
    }

    const getSociety = async (id) => {
        let response = await http.get(`${url.value}/${id}`)
        society.value = response.data.data
    }

    const storeSocieties = async (data) => {
        errors.value = {};
        try {
            await http.post(url.value, data);
            await router.push({ name: 'user' });
        } catch (e) {
            console.error('Error saving society:', e);
    
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }
    
    const editSocieties = async (id) => {
        errors.value = {};
        try {
            await http.put(`${url.value}/${id}`, society.value);
            await router.push({ name: 'user' });
        } catch (e) {
            console.error('Error saving society:', e);
    
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }

    const destroySocieties = async (id) => {
        await http.delete(`${url.value}/${id}`)
    }

    return {
        societies, 
        society,
        errors,
        getSocieties,
        getSociety,
        storeSocieties,
        editSocieties,
        destroySocieties,
    }
}