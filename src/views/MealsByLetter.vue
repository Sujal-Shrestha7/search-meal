<template>
         <div class="flex flex-col p-8 items-center justify-center">

                <div class="flex gap-2 m-2">
                <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}</router-link>
                </div>
            </div>
                    <meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue'
import { useRoute } from 'vue-router';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const meals = computed(() => store.state.setMealsByLetter)
const route = useRoute()

watch(route, ()=> {
        store.dispatch('mealsByLetter', route.params.letter)

})

onMounted(() => {
    store.dispatch('mealsByLetter', route.params.letter)

})

</script>