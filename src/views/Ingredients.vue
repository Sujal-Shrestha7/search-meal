<template>
        <div class="p-8 ">
            <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
                <input 
                type="text" 
                class="rounded border-2 bg-white border-gray-200 w-full p-3 mb-4" 
                placeholder="Search For Ingredients"
                v-model="keyword"
              >
            

        <router-link 
                :to="{name: 'byIngredient',
                 params: { ingredient: ingredient.strIngredient}}"

        v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 shadow">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
        
        </router-link>

    </div>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue'
import store from '../store';
import axiosClient from '../axiosClient';

const keyword = ref('')
const ingredients = ref([])
const computedIngredients = computed(() => {
    if(!computedIngredients) return ingredients
    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
    
})
// const meals = computed(() => store.state.setMealsByIngredients)



// onMounted(() => {
//     axiosClient.get("list.php?i=list").then(({data}) => {
//         ingredients.value = data.meals
//     })
// })

onMounted(async () => {
    try {
        const {data} = await axiosClient.get("list.php?i=list")
        ingredients.value = data.meals
    } catch (error) {
        
    }

})


</script>