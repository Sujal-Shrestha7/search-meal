<template>
    <div class="p-8 pb-0">
        <input type="text" class="rounded border-2 bg-white border-gray-200 w-full p-3" placeholder="Search For Meals"
            v-model="keyword" @change="searchMeals">
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">

                <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
        </div> -->
    <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
// import axiosClient from '../axiosClient';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'
const keyword = ref('')
const meals = computed(() => store.state.setSearchedMeals)
const route = useRoute()

function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    }
    else {
        store.commit('setSearchedMeals', [])
    }

}
onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})


</script>