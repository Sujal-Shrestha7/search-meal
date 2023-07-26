<template>
      <!-- <div class="p-8 pb-0">
                <input 
                type="text" 
                class="rounded border-2 border-gray-200 w-full p-3" 
                placeholder="Search For Meals"
                v-model="igd"
                @change="searchMeals">
            </div> -->
  <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8"> -->
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue'
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute()
const  meals  = computed(() => store.state.setMealsByIngredients)

onMounted(() => {
    store.dispatch('mealsByIngredients', route.params.ingredient)
})
</script>