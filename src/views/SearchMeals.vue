<template>
    <div class="flex flex-col p-8 items-center justify-center">

        <input type="text" class="rounded border-2 border-gray-200 w-full p-2" placeholder="Search For Meals">
        <div class="flex gap-2 m-2">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}</router-link>
        </div>
    </div>
    <pre>
            {{ ingredients }}
        </pre>
</template>

<script setup>
import axiosClient from '../axiosClient';
import store from '../store';
import { onMounted, computed, ref } from 'vue';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const ingredients = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data.meals
})
</script>