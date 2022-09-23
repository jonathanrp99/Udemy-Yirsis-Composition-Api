import { ref, computed} from 'vue'

export const useCounter = (initialValue) => {
    
    const count = ref(initialValue)

    const increase = () => {
        count.value++
    }
    const decrease = () => {
        count.value--
    }

    const vat = computed(() => count.value *1.15)

    return{
        count,
        increase,
        decrease,
        vat
    }
} 